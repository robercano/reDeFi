const fs = require('fs')
const path = require('path')

const rootDir = __dirname
const searchDirs = [path.join(rootDir, 'packages'), path.join(rootDir, 'apps')]

function getPackageRoot(filePath) {
  let currentDir = path.dirname(filePath)
  while (currentDir !== '/' && currentDir !== rootDir) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir
    }
    currentDir = path.dirname(currentDir)
  }
  return null
}

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

searchDirs.forEach((dir) => {
  walk(dir, (filePath) => {
    const packageRoot = getPackageRoot(filePath)
    if (!packageRoot) return

    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    lines.forEach((line, i) => {
      const regex = /(?:from\s+|import\(|require\()['"](\.\.?[^'"]*)['"]/g
      let match
      while ((match = regex.exec(line)) !== null) {
        let relativePath = match[1]
        if (relativePath === '.' || relativePath === '..') relativePath += '/'
        const absoluteTarget = path.resolve(path.dirname(filePath), relativePath)

        if (!absoluteTarget.startsWith(packageRoot)) {
          // ignore turbo.json for now to see others
          if (!absoluteTarget.endsWith('turbo.json')) {
            console.log(`Found rogue import in ${filePath.replace(rootDir + '/', '')}:${i + 1}`)
            console.log(`  ${line}`)
            console.log(`  Resolves to: ${absoluteTarget.replace(rootDir + '/', '')}`)
            found = true
          }
        }
      }
    })
  })
})

if (!found) {
  console.log('No rogue imports found!')
}
