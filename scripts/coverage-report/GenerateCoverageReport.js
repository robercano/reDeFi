/**
 * Code based on https://dev.to/musatov/improving-code-coverage-reporting-in-monorepos-115e
 */
const {
  getAllPathsForPackagesSummaries,
  readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal,
  createCoverageReportForVisualRepresentation,
  createMarkdownReport,
} = require('./Utils')
const { getCommentCoveragePerPackage } = require('./CommentCoverage')
const fs = require('fs')
const path = require('path')

// Execution Stages
// 1. Read all coverage-total.json files
const packagesSummaryPaths = getAllPathsForPackagesSummaries()
// 2. Generate consolidated test coverage report
const currCoverageReport =
  readSummaryPerPackageAndCreateJoinedSummaryReportWithTotal(packagesSummaryPaths)
// 3. Generate comment/JSDoc coverage
const commentCoverage = getCommentCoveragePerPackage(packagesSummaryPaths)
// 4. Reformat the report for visual representation
const coverageReportForVisualRepresentation = createCoverageReportForVisualRepresentation(
  currCoverageReport,
  commentCoverage,
)
// 5. Print the report
console.table(coverageReportForVisualRepresentation)

// 6. Generate and write the Markdown report to the docs
const mdxContent = createMarkdownReport(coverageReportForVisualRepresentation)
const docsPath = path.join(__dirname, '..', '..', 'docs', 'TEST_COVERAGE.md')
fs.writeFileSync(docsPath, mdxContent, 'utf8')
console.log(`Markdown coverage report successfully written to ${docsPath}`)

// 7. Update README.md Coverage Badge
const totalLinesPct = coverageReportForVisualRepresentation['TOTAL']['lines (%)']
if (totalLinesPct !== undefined && totalLinesPct !== 'Unknown') {
  let color = 'red'
  if (totalLinesPct >= 80) color = 'brightgreen'
  else if (totalLinesPct >= 60) color = 'yellow'

  const readmePath = path.join(__dirname, '..', '..', 'README.md')
  let readmeContent = fs.readFileSync(readmePath, 'utf8')
  
  // Replace the badge
  const badgeRegex = /!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/Coverage-[^)]+\)/
  const newBadge = `![Coverage](https://img.shields.io/badge/Coverage-${totalLinesPct}%25-${color}.svg)`
  
  if (badgeRegex.test(readmeContent)) {
    readmeContent = readmeContent.replace(badgeRegex, newBadge)
    fs.writeFileSync(readmePath, readmeContent, 'utf8')
    console.log(`README.md coverage badge successfully updated to ${totalLinesPct}%`)
  } else {
    console.log('Coverage badge not found in README.md. Ensure ![Coverage](...) exists.')
  }
}

