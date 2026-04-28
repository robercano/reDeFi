import { describe, expect, it } from 'vitest'
import { ExternalLendingPosition } from '../src/orders/importing/implementation/ExternalLendingPosition'
import { ExternalLendingPositionId } from '../src/orders/importing/implementation/ExternalLendingPositionId'
import { ImportPositionParameters } from '../src/orders/importing/implementation/ImportPositionParameters'
import { RefinanceParameters } from '../src/orders/refinance/implementation/RefinanceParameters'

describe('OrdersParameters', () => {
  it('ExternalLendingPositionId', () => {
    const id = ExternalLendingPositionId.createFrom({
      id: 'import-pos-1',
      externalType: 'AaveV3' as any,
      address: { toString: () => '0xAddress' } as any,
      protocolId: { toString: () => 'AaveV3-pool' } as any
    })
    expect(id.externalType).toBe('AaveV3')
    expect(id.address).toBeDefined()
    expect(id.protocolId).toBeDefined()
    expect(id.toString()).toBe('External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('ExternalLendingPosition', () => {
    const pos = ExternalLendingPosition.createFrom({
      type: 'Lending' as any,
      id: ExternalLendingPositionId.createFrom({
        id: 'import-pos-1',
        externalType: 'AaveV3' as any,
        address: { toString: () => '0xAddress' } as any,
        protocolId: { toString: () => 'AaveV3-pool' } as any
      }),
      pool: {} as any,
      subtype: {} as any,
      collateralAmount: {} as any,
      debtAmount: {} as any
    })
    expect(pos.id.id).toBe('import-pos-1')
    expect(pos.pool).toBeDefined()
    expect(pos.toString()).toBe('External lending position: id=External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('ImportPositionParameters', () => {
    const params = ImportPositionParameters.createFrom({
      externalPosition: {
        type: 'Lending' as any,
        id: ExternalLendingPositionId.createFrom({
          id: 'import-pos-1',
          externalType: 'AaveV3' as any,
          address: { toString: () => '0xAddress' } as any,
          protocolId: { toString: () => 'AaveV3-pool' } as any
        }),
        pool: {} as any,
        subtype: {} as any,
        collateralAmount: {} as any,
        debtAmount: {} as any
      } as any
    })
    expect(params.externalPosition).toBeDefined()
    expect(params.toString()).toContain('Import position parameters: External lending position: id=External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('RefinanceParameters', () => {
    const params = RefinanceParameters.createFrom({
      sourcePosition: { toString: () => 'SourcePos' } as any,
      targetPool: { toString: () => 'TargetPool' } as any,
      slippage: { toString: () => '1%' } as any
    })
    expect(params.sourcePosition).toBeDefined()
    expect(params.targetPool).toBeDefined()
    expect(params.slippage).toBeDefined()
    expect(params.toString()).toBe('Refinance Parameters (source: SourcePos, target: TargetPool, slippage: 1%)')
  })
})
