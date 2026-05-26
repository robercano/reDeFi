/**
 * Code based on https://dev.to/musatov/improving-code-coverage-reporting-in-monorepos-115e
 */
const fs = require('fs')
const path = require('path')

const EXCLUDED_PACKAGES = [
  'packages/config',
  'packages/deployment-types',
  'packages/deployment-utils',
  'packages/hardhat-utils',
  'packages/ui',
  'apps/sdk-demo',
  'apps/sdk-infra',
  'apps/jobs',
  'apps/api-router',
  'packages/abis',
  'packages/common',
  'packages/sdk/testing-utils',
  'packages/sdk/e2e',
]

function isExcluded(dir) {
  const normalizedDir = dir.replace(/\\/g, '/')
  return (
    EXCLUDED_PACKAGES.some((ex) => normalizedDir.includes(ex)) || normalizedDir.endsWith('/common')
  )
}

function getAllPathsForPackagesSummaries() {
  const summaries = {}

  const findPackages = (dir) => {
    if (!fs.existsSync(dir)) return
    const files = fs.readdirSync(dir, { withFileTypes: true })

    let hasPackageJson = false
    for (const file of files) {
      if (file.name === 'package.json') {
        hasPackageJson = true
        break
      }
    }

    if (hasPackageJson && !isExcluded(dir)) {
      let pkgName = dir.replace(/\\/g, '/')
      pkgName = pkgName.replace(/^apps\//, '')
      pkgName = pkgName.replace(/^packages\/sdk\//, 'sdk-')
      pkgName = pkgName.replace(/^packages\//, '')
      pkgName = pkgName.replace(/\//g, '-')

      summaries[pkgName] = path.join(dir, 'coverage', 'coverage-summary.json')
    }

    for (const file of files) {
      if (
        file.isDirectory() &&
        !['node_modules', '.next', 'dist', 'build', '.git', 'bundle', 'mock'].includes(file.name)
      ) {
        findPackages(path.join(dir, file.name))
      }
    }
  }

  findPackages('apps')
  findPackages('packages')

  return summaries
}

function readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(packagesSummaryPaths) {
  return Object.keys(packagesSummaryPaths).reduce(
    (summary, packageName) => {
      const reportPath = packagesSummaryPaths[packageName]
      let report = null

      if (fs.existsSync(reportPath)) {
        report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
      }

      if (!report || !report.total || !report.total.lines || report.total.lines.pct === 'Unknown') {
        report = {
          total: {
            lines: { total: 0, covered: 0, skipped: 0, pct: 0 },
            statements: { total: 0, covered: 0, skipped: 0, pct: 0 },
            functions: { total: 0, covered: 0, skipped: 0, pct: 0 },
            branches: { total: 0, covered: 0, skipped: 0, pct: 0 },
          },
        }
      }

      const { total } = summary

      Object.keys(report.total).forEach((key) => {
        if (total[key]) {
          total[key].total += report.total[key].total
          total[key].covered += report.total[key].covered
          total[key].skipped += report.total[key].skipped
          total[key].pct =
            total[key].total === 0
              ? 0
              : Number(((total[key].covered / total[key].total) * 100).toFixed(2))
        } else {
          total[key] = { ...report.total[key] }
        }
      })

      return { [packageName]: report.total, ...summary, total }
    },
    { total: {} },
  )
}

function createCoverageReportForVisualRepresentation(coverageReport, commentCoverage = {}) {
  const separator = {
    ['-------------']: {
      'lines (%)': '-----',
      'statements (%)': '-----',
      'functions (%)': '-----',
      'branches (%)': '-----',
      'comments (%)': '-----',
    },
  }

  let totalCommentCoverages = []

  return Object.keys(coverageReport).reduce((report, packageName) => {
    if (
      coverageReport[packageName] === undefined ||
      Object.keys(coverageReport[packageName]).length === 0
    ) {
      return report
    }

    const { lines, statements, functions, branches } = coverageReport[packageName]

    if (packageName !== 'total' && lines.pct === 'Unknown') {
      return report
    }

    let cCov = 'Unknown'
    if (packageName !== 'total' && commentCoverage[packageName] !== undefined) {
      cCov = commentCoverage[packageName]
      if (typeof cCov === 'number') {
        totalCommentCoverages.push(cCov)
      }
    }

    if (packageName === 'total') {
      const avgComments =
        totalCommentCoverages.length > 0
          ? Number(
              (
                totalCommentCoverages.reduce((a, b) => a + b, 0) / totalCommentCoverages.length
              ).toFixed(2),
            )
          : 'Unknown'
      return {
        ...report,
        ...separator,
        ['TOTAL']: {
          'lines (%)': lines.pct,
          'statements (%)': statements.pct,
          'functions (%)': functions.pct,
          'branches (%)': branches.pct,
          'comments (%)': avgComments,
        },
      }
    }

    return {
      ...report,
      [packageName]: {
        'lines (%)': lines.pct,
        'statements (%)': statements.pct,
        'functions (%)': functions.pct,
        'branches (%)': branches.pct,
        'comments (%)': cCov,
      },
    }
  }, {})
}

function createMarkdownReport(coverageReportForVisualRepresentation) {
  let md = '# Test & Comment Coverage Report\n\n'
  md += 'This is the automatically generated coverage report for the monorepo.\n\n'
  md +=
    '| Package | Lines (%) | Statements (%) | Functions (%) | Branches (%) | Comments/JSDoc (%) |\n'
  md += '|---|---|---|---|---|---|\n'

  Object.keys(coverageReportForVisualRepresentation).forEach((packageName) => {
    if (packageName === '-------------') return
    const row = coverageReportForVisualRepresentation[packageName]
    const formatPct = (val) => (val !== undefined && val !== 'Unknown' ? `${val}%` : 'N/A')
    const packNameFormatted = packageName === 'TOTAL' ? '**TOTAL**' : packageName
    const l =
      packageName === 'TOTAL' ? `**${formatPct(row['lines (%)'])}**` : formatPct(row['lines (%)'])
    const s =
      packageName === 'TOTAL'
        ? `**${formatPct(row['statements (%)'])}**`
        : formatPct(row['statements (%)'])
    const f =
      packageName === 'TOTAL'
        ? `**${formatPct(row['functions (%)'])}**`
        : formatPct(row['functions (%)'])
    const b =
      packageName === 'TOTAL'
        ? `**${formatPct(row['branches (%)'])}**`
        : formatPct(row['branches (%)'])
    const c =
      packageName === 'TOTAL'
        ? `**${formatPct(row['comments (%)'])}**`
        : formatPct(row['comments (%)'])

    md += `| ${packNameFormatted} | ${l} | ${s} | ${f} | ${b} | ${c} |\n`
  })

  return md
}

module.exports = {
  getAllPathsForPackagesSummaries,
  readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal,
  createCoverageReportForVisualRepresentation,
  createMarkdownReport,
}
