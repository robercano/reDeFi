import { handler } from './apps/jobs/src/fetchTokens'
handler()
  .then(() => console.log('Done'))
  .catch(console.error)
