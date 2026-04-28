import type { IAddress } from '../../..'
import type { HexData } from '../../../common/types/HexData'

/**
 * @interface Transaction
 * Low level transaction that can be sent to the blockchain
 */
export type Transaction = {
  target: IAddress
  calldata: HexData
  value: string
}
