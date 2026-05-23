import { ITokenAmount } from '../interfaces/ITokenAmount'

/**
 * formatTokenAmountHumanReadable
 * @param tokenAmount The token amount to format
 * @param options Optional formatting options for Intl.NumberFormat
 * @returns A human readable string representation of the token amount
 */
export function formatTokenAmountHumanReadable(
  tokenAmount: ITokenAmount,
  options?: Intl.NumberFormatOptions,
): string {
  const defaultOptions: Intl.NumberFormatOptions = {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
  }
  const numAmount = Number(tokenAmount.amount)
  if (numAmount > 0 && numAmount < 0.01) {
    return '< 0.01'
  }
  return new Intl.NumberFormat('en-US', { ...defaultOptions, ...options }).format(numAmount)
}
