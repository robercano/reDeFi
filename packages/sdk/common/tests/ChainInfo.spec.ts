import { ChainInfo } from '../src/common/implementation/ChainInfo'
import { isChainInfo } from '../src/common/interfaces/IChainInfo'

describe('SDK Common | ChainInfo', () => {
  describe('#createFrom()', () => {
    it('should instantiate with right data', () => {
      const ethereumInfo = ChainInfo.createFrom({
        chainId: 1,
        name: 'Ethereum',
      })

      expect(ethereumInfo.chainId).toEqual(1)
      expect(ethereumInfo.name).toEqual('Ethereum')

      const baseInfo = ChainInfo.createFrom({
        chainId: 8453,
        name: 'Base',
      })

      expect(baseInfo.chainId).toEqual(8453)
      expect(baseInfo.name).toEqual('Base')
    })
  })
  describe('#equals()', () => {
    it('should return true if chainId is the same', () => {
      const ethereumInfo = ChainInfo.createFrom({
        chainId: 1,
        name: 'Ethereum',
      })

      const ethereumInfo2 = ChainInfo.createFrom({
        chainId: 1,
        name: 'Ethereum',
      })

      expect(ethereumInfo.equals(ethereumInfo2)).toBeTruthy()
    })
    it('should return false if chainId is different', () => {
      const ethereumInfo = ChainInfo.createFrom({
        chainId: 1,
        name: 'Ethereum',
      })

      const baseInfo = ChainInfo.createFrom({
        chainId: 8453,
        name: 'Base',
      })

      expect(ethereumInfo.equals(baseInfo)).toBeFalsy()
    })
  })
  describe('#toString()', () => {
    it('should return a string representation', () => {
      const ethereumInfo = ChainInfo.createFrom({
        chainId: 1,
        name: 'Ethereum',
      })

      expect(ethereumInfo.toString()).toEqual('Ethereum (ID: 1)')
    })
  })
  describe('#isChainInfo()', () => {
    it('should return true for valid IChainInfo', () => {
      const valid = { chainId: 1, name: 'Ethereum' }
      expect(isChainInfo(valid)).toBeTruthy()
    })
    it('should return false for invalid IChainInfo', () => {
      const invalid = { chainId: 'not-a-number', name: 'Ethereum' }
      const errors: string[] = []
      expect(isChainInfo(invalid, errors)).toBeFalsy()
      expect(errors.length).toBeGreaterThan(0)
    })
  })
})
