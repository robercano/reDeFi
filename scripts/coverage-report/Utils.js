/**
 * Code based on https://dev.to/musatov/improving-code-coverage-reporting-in-monorepos-115e
 */
const fs = require('fs')
const path = require('path')

function getAllPathsForPackagesSummaries() {
  const getDirectories = (source) =>
    fs
      .readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

  const appsPath = 'apps'
  const appsNames = fs.existsSync(appsPath) ? getDirectories(appsPath) : []

  const appsSummaries = appsNames.reduce((summary, appName) => {
    let summaryPath = path.join(appsPath, appName, 'coverage', 'coverage-summary.json')
    if (fs.existsSync(path.join(appsPath, appName, 'service'))) {
      summaryPath = path.join(appsPath, appName, 'service', 'coverage', 'coverage-summary.json')
    }
    return {
      ...summary,
      [appName]: summaryPath,
    }
  }, {})

  const packagesPath = 'packages'
  const packageNames = fs.existsSync(packagesPath) ? getDirectories(packagesPath) : []

  const packagesSummaries = packageNames.reduce((summary, packageName) => {
    return {
      ...summary,
      [packageName]: path.join(packagesPath, packageName, 'coverage', 'coverage-summary.json'),
    }
  }, {})
  
  const sdkPath = path.join('packages', 'sdk')
  const sdkNames = fs.existsSync(sdkPath) ? getDirectories(sdkPath) : []

  const sdkSummaries = sdkNames.reduce((summary, packageName) => {
    const pkgPath = path.join(sdkPath, packageName);
    const subDirs = getDirectories(pkgPath);
    let extraSummaries = {};
    if (subDirs.includes('service')) {
      extraSummaries[`sdk-${packageName}-service`] = path.join(pkgPath, 'service', 'coverage', 'coverage-summary.json');
    }
    if (subDirs.includes('common')) {
      extraSummaries[`sdk-${packageName}-common`] = path.join(pkgPath, 'common', 'coverage', 'coverage-summary.json');
    }
    return {
      ...summary,
      [`sdk-${packageName}`]: path.join(pkgPath, 'coverage', 'coverage-summary.json'),
      ...extraSummaries,
    }
  }, {})

  return { ...appsSummaries, ...packagesSummaries, ...sdkSummaries }
}

function readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(packagesSummaryPaths) {
  return Object.keys(packagesSummaryPaths).reduce(
    (summary, packageName) => {
      const reportPath = packagesSummaryPaths[packageName]
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))

        if (!report.total || !report.total.lines || report.total.lines.pct === 'Unknown' || report.total.lines.pct === 0) {
          return summary
        }

        const { total } = summary

        Object.keys(report.total).forEach((key) => {
          if (total[key]) {
            total[key].total += report.total[key].total
            total[key].covered += report.total[key].covered
            total[key].skipped += report.total[key].skipped
            total[key].pct = total[key].total === 0 ? 'Unknown' : Number(((total[key].covered / total[key].total) * 100).toFixed(2))
          } else {
            total[key] = { ...report.total[key] }
          }
        })

        return { [packageName]: report.total, ...summary, total }
      }

      return summary
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

  let totalCommentCoverages = [];

  return Object.keys(coverageReport).reduce((report, packageName) => {
    if (
      coverageReport[packageName] === undefined ||
      Object.keys(coverageReport[packageName]).length === 0
    ) {
      return report
    }

    const { lines, statements, functions, branches } = coverageReport[packageName]

    if (packageName !== 'total' && (lines.pct === 'Unknown' || lines.pct === 0)) {
      return report
    }

    let cCov = 'Unknown';
    if (packageName !== 'total' && commentCoverage[packageName] !== undefined) {
      cCov = commentCoverage[packageName];
      if (typeof cCov === 'number') {
        totalCommentCoverages.push(cCov);
      }
    }

    if (packageName === 'total') {
      const avgComments = totalCommentCoverages.length > 0 
        ? Number((totalCommentCoverages.reduce((a, b) => a + b, 0) / totalCommentCoverages.length).toFixed(2)) 
        : 'Unknown';
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
  md += '| Package | Lines (%) | Statements (%) | Functions (%) | Branches (%) | Comments/JSDoc (%) |\n'
  md += '|---|---|---|---|---|---|\n'

  Object.keys(coverageReportForVisualRepresentation).forEach((packageName) => {
    if (packageName === '-------------') return
    const row = coverageReportForVisualRepresentation[packageName]
    const formatPct = (val) => (val !== undefined && val !== 'Unknown' ? `${val}%` : 'N/A')
    const packNameFormatted = packageName === 'TOTAL' ? '**TOTAL**' : packageName
    const l = packageName === 'TOTAL' ? `**${formatPct(row['lines (%)'])}**` : formatPct(row['lines (%)'])
    const s = packageName === 'TOTAL' ? `**${formatPct(row['statements (%)'])}**` : formatPct(row['statements (%)'])
    const f = packageName === 'TOTAL' ? `**${formatPct(row['functions (%)'])}**` : formatPct(row['functions (%)'])
    const b = packageName === 'TOTAL' ? `**${formatPct(row['branches (%)'])}**` : formatPct(row['branches (%)'])
    const c = packageName === 'TOTAL' ? `**${formatPct(row['comments (%)'])}**` : formatPct(row['comments (%)'])

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
