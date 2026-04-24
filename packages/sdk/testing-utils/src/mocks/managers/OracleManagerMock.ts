import { IToken, OracleProviderType } from '@thesolidchain/sdk-common'
import { ISpotPriceInfo, type SpotPricesInfo } from '@thesolidchain/sdk-common'
import { IOracleManager, IOracleProvider } from '@thesolidchain/oracle-common'
import { ManagerWithFallbackProvidersBase } from '@thesolidchain/api-server-common'

export class OracleManagerMock
  extends ManagerWithFallbackProvidersBase<OracleProviderType, IOracleProvider>
  implements IOracleManager
{
  private _spotDataReturnValue: ISpotPriceInfo = {} as ISpotPriceInfo

  constructor() {
    super({
      providers: [],
    })
  }

  setSpotPrice(spotPrice: ISpotPriceInfo): void {
    this._spotDataReturnValue = spotPrice
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getSpotPrice(params: { baseToken: IToken }): Promise<ISpotPriceInfo> {
    return this._spotDataReturnValue
  }

  async getSpotPrices(): Promise<SpotPricesInfo> {
    return {} as SpotPricesInfo
  }
}
