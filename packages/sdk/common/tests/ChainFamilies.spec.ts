import { ChainIds, ChainInfo, type ChainId } from '../src'
import { getChainFamilyInfoByChainId, valuesOfChainFamilyMap, ChainFamilyName } from '../src/common/implementation/ChainFamilies'

describe('Chain Families', () => {
  it('should retrieve chain info by Id', () => {
    const ethereumMainnet = getChainFamilyInfoByChainId(ChainIds.Mainnet)

    expect(ethereumMainnet).toEqual({
      familyName: 'Ethereum',
      chainInfo: ChainInfo.createFrom({
        chainId: 1,
        name: 'Mainnet',
      }),
    })

    const base = getChainFamilyInfoByChainId(ChainIds.Base)

    expect(base).toEqual({
      familyName: 'Base',
      chainInfo: ChainInfo.createFrom({
        chainId: ChainIds.Base,
        name: 'Base',
      }),
    })

    const arbitrumOne = getChainFamilyInfoByChainId(42161)

    expect(arbitrumOne).toEqual({
      familyName: 'Arbitrum',
      chainInfo: ChainInfo.createFrom({
        chainId: 42161,
        name: 'ArbitrumOne',
      }),
    })

    const optimism = getChainFamilyInfoByChainId(10)

    expect(optimism).toEqual({
      familyName: 'Optimism',
      chainInfo: ChainInfo.createFrom({
        chainId: 10 as ChainId,
        name: 'Optimism',
      }),
    })

    const baseMainnet = getChainFamilyInfoByChainId(8453)

    expect(baseMainnet).toEqual({
      familyName: 'Base',
      chainInfo: ChainInfo.createFrom({
        chainId: 8453,
        name: 'Base',
      }),
    })
  })

  it('should throw an error for unsupported chain Id', () => {
    expect(() => getChainFamilyInfoByChainId(999999)).toThrowError('Chain with id 999999 not supported')
  })
})

describe('valuesOfChainFamilyMap', () => {
  it('should return all ChainInfo objects for given families', () => {
    const infos = valuesOfChainFamilyMap([ChainFamilyName.Ethereum, ChainFamilyName.Base])
    expect(infos).toHaveLength(2)
    expect(infos.some((info) => info.chainId === 1)).toBeTruthy()
    expect(infos.some((info) => info.chainId === 8453)).toBeTruthy()
  })
})
