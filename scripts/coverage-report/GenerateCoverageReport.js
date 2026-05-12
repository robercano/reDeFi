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
