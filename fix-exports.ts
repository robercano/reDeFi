import * as fs from 'fs'
import * as path from 'path'

function findPackageJsons(dir: string): string[] {
  const result: string[] = []
  if (!fs.existsSync(dir)) return result
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const fullPath = path.join(dir, file)
    if (file === 'node_modules' || file === 'dist' || file === '.turbo' || file === '.next') continue
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      result.push(...findPackageJsons(fullPath))
    } else if (file === 'package.json') {
      result.push(fullPath)
    }
  }
  return result
}

const packageJsons = [
  ...findPackageJsons(path.join(process.cwd(), 'packages')),
  ...findPackageJsons(path.join(process.cwd(), 'apps')),
]

for (const pkgPath of packageJsons) {
  try {
    const content = fs.readFileSync(pkgPath, 'utf8')
    const json = JSON.parse(content)
    if (json.exports && typeof json.exports === 'object') {
      let modified = false
      for (const key of Object.keys(json.exports)) {
        const exp = json.exports[key]
        if (exp && typeof exp === 'object' && exp.import) {
          if (!exp.require) {
            exp.require = exp.import
            modified = true
          }
          if (!exp.default) {
            exp.default = exp.import
            modified = true
          }
        }
      }
      if (modified) {
        fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2) + '\n')
        console.log(`Fixed exports in ${pkgPath}`)
      }
    }
  } catch (e) {
    console.error(`Failed to process ${pkgPath}`, e)
  }
}
