const fs = require('fs')
const path = require('path')

const rootDir = __dirname
const appsDir = path.join(rootDir, 'apps')

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git' && file !== '.next') {
        walk(fullPath, callback)
      }
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      callback(fullPath)
    }
  }
}

let found = false

walk(appsDir, (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  lines.forEach((line, i) => {
    // Check if any import references packages directly
    if (
      line.includes("from '../../packages") ||
      line.includes("from '../../../packages") ||
      line.includes("from '../packages")
    ) {
      console.log(`Found direct packages import in ${filePath.replace(rootDir + '/', '')}:${i + 1}`)
      console.log(`  ${line}`)
      found = true
    }
  })
})

if (!found) {
  console.log('No direct packages imports found in apps!')
}
