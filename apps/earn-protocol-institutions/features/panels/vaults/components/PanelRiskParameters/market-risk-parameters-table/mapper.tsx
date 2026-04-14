import { TableCellNodes, TableCellText } from '@thesolidchain/app-earn-ui'
import { formatWithSeparators } from '@thesolidchain/app-utils'

import { type MarketRiskParameters } from './types'

export const marketRiskParametersMapper = ({ rawData }: { rawData: MarketRiskParameters[] }) => {
  return rawData.map((item) => {
    return {
      content: {
        market: <TableCellText>{item.market}</TableCellText>,
        'market-cap': <TableCellNodes>{item.marketCap}</TableCellNodes>,
        'max-percentage': <TableCellNodes>{item.maxPercentage}</TableCellNodes>,
        'implied-cap': (
          <TableCellNodes>
            {formatWithSeparators(item.impliedCap)}
            {item.token ? ` ${item.token}` : ''}
          </TableCellNodes>
        ),
      },
    }
  })
}
