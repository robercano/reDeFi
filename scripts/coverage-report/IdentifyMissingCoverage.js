const fs = require('fs')
const path = require('path')

const IGNORE_DIRS = ['node_modules', '.next', 'dist', 'build', '.git', 'bundle', 'mock']

function findPackages(dir, packages = []) {
  if (!fs.existsSync(dir)) return packages
  const files = fs.readdirSync(dir, { withFileTypes: true })
  let hasPackageJson = false

  for (const file of files) {
    if (file.name === 'package.json') {
      hasPackageJson = true
    }
  }

  if (hasPackageJson) {
    packages.push(dir)
  }

  for (const file of files) {
    if (file.isDirectory() && !IGNORE_DIRS.includes(file.name)) {
      findPackages(path.join(dir, file.name), packages)
    }
  }

  return packages
}

const allPackages = [...findPackages('apps'), ...findPackages('packages')]

const missingCoverage = []
const missingVitest = []
const hasCoverage = []

allPackages.forEach((pkg) => {
  const hasVitest =
    fs.existsSync(path.join(pkg, 'vitest.config.ts')) ||
    fs.existsSync(path.join(pkg, 'vitest.config.js'))
  const hasCoverageSummary = fs.existsSync(path.join(pkg, 'coverage', 'coverage-summary.json'))

  if (!hasVitest) {
    missingVitest.push(pkg)
  } else if (!hasCoverageSummary) {
    missingCoverage.push(pkg)
  } else {
    hasCoverage.push(pkg)
  }
})

console.log('--- PACKAGES WITH VITEST BUT MISSING COVERAGE SUMMARY ---')
missingCoverage.forEach((p) => console.log(p))

console.log('\n--- PACKAGES MISSING VITEST ---')
missingVitest.forEach((p) => console.log(p))

console.log('\n--- PACKAGES WITH COVERAGE ---')
hasCoverage.forEach((p) => console.log(p))
