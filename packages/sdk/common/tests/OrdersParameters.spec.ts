import { describe, expect, it } from 'vitest'
import { ExternalLendingPosition } from '../src/orders/importing/implementation/ExternalLendingPosition'
import { ExternalLendingPositionId } from '../src/orders/importing/implementation/ExternalLendingPositionId'
import { ImportPositionParameters } from '../src/orders/importing/implementation/ImportPositionParameters'
import { RefinanceParameters } from '../src/orders/refinance/implementation/RefinanceParameters'

describe('OrdersParameters', () => {
  it('ExternalLendingPositionId', () => {
    const id = ExternalLendingPositionId.createFrom({
      id: 'import-pos-1',
      externalType: 'AaveV3' as never,
      address: { toString: () => '0xAddress' } as never,
      protocolId: { toString: () => 'AaveV3-pool' } as never
    })
    expect(id.externalType).toBe('AaveV3')
    expect(id.address).toBeDefined()
    expect(id.protocolId).toBeDefined()
    expect(id.toString()).toBe('External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('ExternalLendingPosition', () => {
    const pos = ExternalLendingPosition.createFrom({
      type: 'Lending' as never,
      id: ExternalLendingPositionId.createFrom({
        id: 'import-pos-1',
        externalType: 'AaveV3' as never,
        address: { toString: () => '0xAddress' } as never,
        protocolId: { toString: () => 'AaveV3-pool' } as never
      }),
      pool: {} as never,
      subtype: {} as never,
      collateralAmount: {} as never,
      debtAmount: {} as never
    })
    expect(pos.id.id).toBe('import-pos-1')
    expect(pos.pool).toBeDefined()
    expect(pos.toString()).toBe('External lending position: id=External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('ImportPositionParameters', () => {
    const params = ImportPositionParameters.createFrom({
      externalPosition: {
        type: 'Lending' as never,
        id: ExternalLendingPositionId.createFrom({
          id: 'import-pos-1',
          externalType: 'AaveV3' as never,
          address: { toString: () => '0xAddress' } as never,
          protocolId: { toString: () => 'AaveV3-pool' } as never
        }),
        pool: {} as never,
        subtype: {} as never,
        collateralAmount: {} as never,
        debtAmount: {} as never
      } as never
    })
    expect(params.externalPosition).toBeDefined()
    expect(params.toString()).toContain('Import position parameters: External lending position: id=External lending position ID: AaveV3 at 0xAddress (Lending Position ID: import-pos-1 with type: Lending)')
  })

  it('RefinanceParameters', () => {
    const params = RefinanceParameters.createFrom({
      sourcePosition: { toString: () => 'SourcePos' } as never,
      targetPool: { toString: () => 'TargetPool' } as never,
      slippage: { toString: () => '1%' } as never
    })
    expect(params.sourcePosition).toBeDefined()
    expect(params.targetPool).toBeDefined()
    expect(params.slippage).toBeDefined()
    expect(params.toString()).toBe('Refinance Parameters (source: SourcePos, target: TargetPool, slippage: 1%)')
  })
})
