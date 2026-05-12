import { handler } from './fetchTokens'

console.log('Manually triggering fetchTokens...')

handler()
  .then(() => {
    console.log('Successfully completed manual fetch.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Manual fetch failed:', error)
    process.exit(1)
  })
