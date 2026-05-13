import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AllowanceManager } from '../src/implementation/AllowanceManager'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { TokenAmount, TransactionType, Token, Address } from '@thesolidchain/sdk-common'

describe('AllowanceManager', () => {
  let mockConfigProvider: import('vitest').Mocked<IConfigurationProvider>
  let mockContractsProvider: import('vitest').Mocked<IContractsProvider>
  let mockErc20Contract: any
  let allowanceManager: AllowanceManager

  const mockChainInfo = { chainId: 1, name: 'Ethereum' } as any

  const mockToken = {
    address: { value: '0x1111111111111111111111111111111111111111' },
    decimals: 18,
    symbol: 'MTK',
    name: 'Mock Token',
    chainInfo: mockChainInfo,
  } as unknown as Token

  const mockOwner = { value: '0x2222222222222222222222222222222222222222' } as unknown as Address
  const mockSpender = { value: '0x3333333333333333333333333333333333333333' } as unknown as Address
  const mockAmount = TokenAmount.createFromBaseUnit({ token: mockToken, amount: '1000' })

  beforeEach(() => {
    mockConfigProvider = {} as any

    mockErc20Contract = {
      allowance: vi.fn(),
      approve: vi.fn(),
    } as any

    mockContractsProvider = {
      getErc20Contract: vi.fn().mockResolvedValue(mockErc20Contract),
    } as any

    allowanceManager = new AllowanceManager({
      configProvider: mockConfigProvider,
      contractsProvider: mockContractsProvider,
    })
  })

  describe('getApproval', () => {
    it('should return undefined if the owner has sufficient allowance', async () => {
      // 2000 allowance is greater than 1000 needed
      mockErc20Contract.allowance.mockResolvedValue(2000n)
      
      const result = await allowanceManager.getApproval({
        amount: mockAmount,
        spender: mockSpender,
        owner: mockOwner,
        chainInfo: mockChainInfo,
      })

      expect(mockContractsProvider.getErc20Contract).toHaveBeenCalledWith(
        expect.objectContaining({
          address: expect.objectContaining({ value: '0x1111111111111111111111111111111111111111' }),
          chainInfo: mockChainInfo,
        })
      )
      expect(mockErc20Contract.allowance).toHaveBeenCalledWith(
        '0x2222222222222222222222222222222222222222',
        '0x3333333333333333333333333333333333333333'
      )
      expect(result).toBeUndefined()
    })

    it('should return an approval transaction if the owner has insufficient allowance', async () => {
      // 500 allowance is less than 1000 needed
      mockErc20Contract.allowance.mockResolvedValue(500n)
      mockErc20Contract.approve.mockResolvedValue({ to: '0x1111111111111111111111111111111111111111', data: '0xapprove' } as any)

      const result = await allowanceManager.getApproval({
        amount: mockAmount,
        spender: mockSpender,
        owner: mockOwner,
        chainInfo: mockChainInfo,
      })

      expect(result).toBeDefined()
      expect(result?.type).toBe(TransactionType.Approve)
      expect((result as any)?.to).toBe('0x1111111111111111111111111111111111111111')
      expect((result as any)?.data).toBe('0xapprove')
      expect(result?.metadata?.approvalAmount).toBe(mockAmount)
      expect(result?.metadata?.approvalSpender).toBe(mockSpender)
    })

    it('should return an approval transaction if owner is not provided', async () => {
      // if no owner is provided, it must return the transaction without checking allowance
      mockErc20Contract.approve.mockResolvedValue({ to: '0xtoken', data: '0xapprove' } as any)

      const result = await allowanceManager.getApproval({
        amount: mockAmount,
        spender: mockSpender,
        chainInfo: mockChainInfo,
      })

      expect(mockErc20Contract.allowance).not.toHaveBeenCalled()
      expect(mockErc20Contract.approve).toHaveBeenCalledWith('0x3333333333333333333333333333333333333333', 1000n)
      
      expect(result).toBeDefined()
      expect(result?.type).toBe(TransactionType.Approve)
      expect(result?.metadata?.approvalAmount).toBe(mockAmount)
    })
  })
})
