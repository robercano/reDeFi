import { Resource } from 'sst'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand, BatchWriteCommand } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)

const UNISWAP_TOKENS_URL = 'https://tokens.uniswap.org'

interface TokenInfo {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI?: string
}

export const handler = async () => {
  console.log('Fetching tokens from Uniswap list...')
  try {
    const response = await fetch(UNISWAP_TOKENS_URL)
    const data = await response.json()
    const tokens: TokenInfo[] = data.tokens

    console.log(`Fetched ${tokens.length} tokens. Upserting to DynamoDB...`)

    // Batch write tokens to DynamoDB
    const tableName = Resource.TokensTable.name
    
    // DynamoDB batchWrite can only write 25 items at a time
    const chunkSize = 25
    for (let i = 0; i < tokens.length; i += chunkSize) {
      const chunk = tokens.slice(i, i + chunkSize)
      
      const putRequests = chunk.map(token => ({
        PutRequest: {
          Item: {
            id: `${token.chainId}#${token.address}`,
            chainId: token.chainId,
            address: token.address,
            name: token.name,
            symbol: token.symbol,
            decimals: token.decimals,
            logoURI: token.logoURI || null,
          }
        }
      }))

      await docClient.send(new BatchWriteCommand({
        RequestItems: {
          [tableName]: putRequests
        }
      }))
      
      if ((i + chunkSize) % 500 === 0) {
        console.log(`Processed ${i + chunkSize} tokens...`)
      }
    }

    console.log('Successfully upserted all tokens to DynamoDB.')
  } catch (error) {
    console.error('Failed to fetch and upsert tokens:', error)
    throw error
  }
}
