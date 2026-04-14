import { Card, LoadingSpinner } from '@thesolidchain/app-earn-ui'

export default function InstitutionVaultsAssetReallocationLoadingTab() {
  return (
    <Card variant="cardSecondary">
      <LoadingSpinner size={40} style={{ margin: '40px auto' }} />
    </Card>
  )
}
