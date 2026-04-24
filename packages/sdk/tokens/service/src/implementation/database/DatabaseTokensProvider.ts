import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb'
import { ManagerProviderBase } from '@thesolidchain/api-server-common'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import {
  Address,
  AddressType,
  IAddress,
  IChainInfo,
  IToken,
  NATIVE_CURRENCY_ADDRESS_LOWERCASE,
  Token,
  TokenAmount,
  TokensProviderType,
} from '@thesolidchain/sdk-common'
import { ITokensProvider } from '@thesolidchain/tokens-common'

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)

export class DatabaseTokensProvider
  extends ManagerProviderBase<TokensProviderType>
  implements ITokensProvider
{
  private readonly _blockchainClientProvider: IBlockchainManager
  private readonly _contractsProvider: IContractsProvider
  private readonly _configProvider: IConfigurationProvider

  constructor(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
  }) {
    super({
      type: TokensProviderType.Database,
      ...params,
    })

    this._blockchainClientProvider = params.blockchainClientProvider
    this._contractsProvider = params.contractsProvider
    this._configProvider = params.configProvider
  }

  getSupportedChainIds: ITokensProvider['getSupportedChainIds'] = () => {
    // In a real app we'd query supported chains or configure them
    return [1] // Assuming Ethereum for now, or fetch from config
  }

  getTokenBySymbol: ITokensProvider['getTokenBySymbol'] = async (params) => {
    const { chainInfo, symbol } = params

    const tableName = this._configProvider.getConfigurationItem({ name: 'TOKENS_TABLE_NAME' })

    const response = await docClient.send(
      new QueryCommand({
        TableName: tableName,
        IndexName: 'symbolIndex',
        KeyConditionExpression: 'symbol = :symbol',
        FilterExpression: 'chainId = :chainId',
        ExpressionAttributeValues: {
          ':symbol': symbol,
          ':chainId': chainInfo.chainId,
        },
      }),
    )

    if (!response.Items || response.Items.length === 0) {
      throw new Error(`No token data found for symbol: ${symbol} on chain: ${chainInfo.chainId}`)
    }

    const tokenData = response.Items[0]
    return this._createToken({ chainInfo, tokenData })
  }

  getTokenByAddress: ITokensProvider['getTokenByAddress'] = async (params) => {
    const { chainInfo, address } = params

    const tableName = this._configProvider.getConfigurationItem({ name: 'TOKENS_TABLE_NAME' })

    const response = await docClient.send(
      new GetCommand({
        TableName: tableName,
        Key: {
          id: `${chainInfo.chainId}#${address.value}`,
        },
      }),
    )

    if (!response.Item) {
      throw new Error(
        `No token data found for address: ${address.value} on chain: ${chainInfo.chainId}`,
      )
    }

    return this._createToken({ chainInfo, tokenData: response.Item })
  }

  getTokenByName: ITokensProvider['getTokenByName'] = async (_params) => {
    // DynamoDB scanning by name is inefficient. We'd ideally need a name index.
    // For now, this is a placeholder or requires a GSI on 'name'
    throw new Error('getTokenByName is not yet supported by DatabaseTokensProvider')
  }

  getTokenBalanceBySymbol: ITokensProvider['getTokenBalanceBySymbol'] = async (params) => {
    const token = await this.getTokenBySymbol({
      chainInfo: params.chainInfo,
      symbol: params.symbol,
    })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  getTokenBalanceByAddress: ITokensProvider['getTokenBalanceByAddress'] = async (params) => {
    const token = await this.getTokenByAddress({
      chainInfo: params.chainInfo,
      address: params.address,
    })

    const balance = await this._getTokenBalance({
      chainInfo: params.chainInfo,
      token,
      walletAddress: params.walletAddress,
    })

    return TokenAmount.createFromBaseUnit({ token, amount: balance.toString() })
  }

  getTokenTotalSupply: ITokensProvider['getTokenTotalSupply'] = async (params) => {
    const { token } = params

    if (token.address.value.toLowerCase() === NATIVE_CURRENCY_ADDRESS_LOWERCASE) {
      throw new Error(`Total supply is not supported for native currency`)
    }

    let totalSupply: bigint | undefined = 0n
    try {
      const erc20 = await this._contractsProvider.getErc20Contract({
        chainInfo: token.chainInfo,
        address: token.address,
      })
      totalSupply = await erc20.totalSupply()
    } catch (error) {
      console.log('Error getting token total supply:', error)
    }

    return TokenAmount.createFromBaseUnit({ token, amount: (totalSupply ?? 0n).toString() })
  }

  private async _getTokenBalance(params: {
    chainInfo: IChainInfo
    token: IToken
    walletAddress: IAddress
  }): Promise<bigint> {
    const { chainInfo, token, walletAddress } = params

    const client = this._blockchainClientProvider.getBlockchainClient({ chainInfo })

    if (token.address.value.toLowerCase() === NATIVE_CURRENCY_ADDRESS_LOWERCASE) {
      return await client.getBalance({ address: walletAddress.value })
    }

    const erc20 = await this._contractsProvider.getErc20Contract({
      chainInfo,
      address: token.address,
    })
    return await erc20.balanceOf(walletAddress.value)
  }

  private _createToken(params: {
    chainInfo: IChainInfo
    tokenData: Record<string, unknown>
  }): IToken {
    const { chainInfo, tokenData } = params

    return Token.createFrom({
      address: Address.createFrom({
        value: tokenData.address as `0x${string}`,
        type: AddressType.Ethereum,
      }),
      chainInfo: chainInfo,
      decimals: tokenData.decimals as number,
      name: tokenData.name as string,
      symbol: tokenData.symbol as string,
      logoURI: tokenData.logoURI as string | undefined,
    })
  }
}
