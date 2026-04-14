import { Price, PRICE_DECIMALS } from '@thesolidchain/triggers-shared'

export const reversePrice = (price: Price): Price => {
  return 10n ** (PRICE_DECIMALS * 2n) / price
}
