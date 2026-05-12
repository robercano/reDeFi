[**redefi**](../../../README.md)

***

[redefi](../../../README.md) / [common/src](../README.md) / VolatilityProfile

# Enumeration: VolatilityProfile

Defines the generic volatility profiles for data caching.
Rather than hardcoding operation names, plugins classify how often their data changes.

## Enumeration Members

### BLOCK\_BOUND

> **BLOCK\_BOUND**: `"BLOCK_BOUND"`

Changes every block (e.g., wallet balances, allowances)

***

### STATIC

> **STATIC**: `"STATIC"`

Never changes (e.g., token decimals, names, pool addresses)

***

### TIME\_FAST

> **TIME\_FAST**: `"TIME_FAST"`

Changes rapidly off-chain (e.g., live fiat prices from an Oracle)

***

### TIME\_SLOW

> **TIME\_SLOW**: `"TIME_SLOW"`

Changes slowly off-chain (e.g., historical APY data, chart data)
