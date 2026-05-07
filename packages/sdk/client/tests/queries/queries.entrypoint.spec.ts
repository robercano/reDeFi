import getLendingPoolTest from './getLendingPool.subtest'
import getLendingPoolInfoTest from './getLendingPoolInfo.subtest'
import getTokenByAddress from './getTokenByAddress.subtest'
import getTokenByName from './getTokenByName.subtest'
import getTokenBySymbol from './getTokenBySymbol.subtest'
import makeSDKTest from './makeSDK.subtest'
import simulateNewOrder from './newOrder.subtest'
import intentSwapClientTest from './intentSwapClient.subtest'
import makeSDKWithSignerTest from './makeSDKWithSigner.subtest'
import portfolioManagerTest from './portfolioManager.subtest'
import swapManagerClientTest from './swapManagerClient.subtest'
import tokensManagerClient2Test from './tokensManagerClient2.subtest'
import userClientTest from './userClient.subtest'
describe('SDK Client', () => {
  it('should create SDK client', makeSDKTest.bind(this))
  it('should use the getLendingPool query', getLendingPoolTest.bind(this))
  it('should use the getLendingPoolInfo query', getLendingPoolInfoTest.bind(this))

  it('should use the newOrder query', simulateNewOrder.bind(this))
  it('should use the getTokenBySymbol query', getTokenBySymbol.bind(this))
  it('should use the getTokenByAddress query', getTokenByAddress.bind(this))
  it('should use the getTokenByName query', getTokenByName.bind(this))
  it('should create SDK client with signer', makeSDKWithSignerTest.bind(this))
  it('should use the intentSwapClient', intentSwapClientTest.bind(this))
  it('should use the portfolioManager', portfolioManagerTest.bind(this))
  it('should use the swapManagerClient', swapManagerClientTest.bind(this))
  it('should use the tokensManagerClient2', tokensManagerClient2Test.bind(this))
  it('should use the userClient', userClientTest.bind(this))
})
