const fs = require('fs');
const path = require('path');

const dir = 'packages/sdk/e2e/tests';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.test.ts'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('TenderlyForkUrl') && !content.includes('import { TenderlyFork }')) {
    content = content.replace(/const TenderlyForkUrl =[^]*?;/, '');
    content = content.replace(/TenderlyForkUrl:\s*['"][^'"]*['"]/, '');
    
    // Add imports
    content = `import { TenderlyFork } from '@thesolidchain/tenderly-utils'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../../../.env' })

` + content;

    // Add beforeAll etc inside describe
    const hookCode = `  let fork: TenderlyFork
  let snapshotId: string

  beforeAll(async () => {
    fork = await TenderlyFork.create({
      tenderlyApiUrl: \`https://api.tenderly.co/api/v1/account/\${process.env.TENDERLY_USER}/project/\${process.env.TENDERLY_PROJECT}\`,
      tenderlyAccessKey: process.env.TENDERLY_ACCESS_KEY!,
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    })
  }, 30000)

  beforeEach(async () => {
    snapshotId = await fork.snapshot()
  })

  afterEach(async () => {
    if (snapshotId) {
      await fork.revert(snapshotId)
    }
  })

  afterAll(async () => {
    if (fork) {
      await fork.dispose()
    }
  })
`;
    content = content.replace(/(describe.*?=>\s*\{)/, `$1\n${hookCode}`);
    
    // Replace TenderlyForkUrl with fork.forkUrl
    content = content.replace(/TenderlyForkUrl/g, 'fork.forkUrl');
    // For config.TenderlyForkUrl
    content = content.replace(/config\.TenderlyForkUrl/g, 'fork.forkUrl');
    
    fs.writeFileSync(filePath, content);
    console.log('Refactored', file);
  }
}
