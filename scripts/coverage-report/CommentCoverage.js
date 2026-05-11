const ts = require('typescript');
const fs = require('fs');
const path = require('path');

function getTsFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getTsFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts') && !file.includes('.spec.ts') && !file.includes('.test.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

function calculateJSDocCoverageForPackage(pkgPath) {
  const srcPath = path.join(pkgPath, 'src');
  const files = getTsFiles(srcPath);

  let totalNodes = 0;
  let documentedNodes = 0;

  for (const file of files) {
    const sourceFile = ts.createSourceFile(
      file,
      fs.readFileSync(file, 'utf8'),
      ts.ScriptTarget.Latest,
      true
    );

    function visit(node) {
      const isExported = node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
      const isClassMember = ts.isMethodDeclaration(node) || ts.isPropertyDeclaration(node);
      const isInterfaceMember = ts.isMethodSignature(node) || ts.isPropertySignature(node);

      if (isExported || isClassMember || isInterfaceMember) {
        if (
          ts.isFunctionDeclaration(node) ||
          ts.isClassDeclaration(node) ||
          ts.isInterfaceDeclaration(node) ||
          ts.isTypeAliasDeclaration(node) ||
          ts.isMethodDeclaration(node) ||
          ts.isPropertyDeclaration(node) ||
          ts.isMethodSignature(node) ||
          ts.isPropertySignature(node) ||
          ts.isVariableStatement(node)
        ) {
          totalNodes++;
          
          const comments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);
          let hasDoc = false;
          if (comments) {
            for (const range of comments) {
              const text = sourceFile.text.substring(range.pos, range.end);
              if (text.startsWith('/**')) {
                hasDoc = true;
                break;
              }
            }
          }
          if (hasDoc) {
            documentedNodes++;
          }
        }
      }
      ts.forEachChild(node, visit);
    }

    visit(sourceFile);
  }

  if (totalNodes === 0) return 'Unknown';
  return Number(((documentedNodes / totalNodes) * 100).toFixed(2));
}

function getCommentCoveragePerPackage(packagesSummaryPaths) {
  const commentCoverage = {};
  for (const pkgName of Object.keys(packagesSummaryPaths)) {
    // Determine the package path based on the name. It could be apps/, packages/, packages/sdk/...
    // Let's resolve from packagesSummaryPaths which has paths to coverage-summary.json
    const summaryPath = packagesSummaryPaths[pkgName];
    // e.g. packages/sdk/common/coverage/coverage-summary.json -> packages/sdk/common
    const pkgDir = path.dirname(path.dirname(summaryPath)); 
    commentCoverage[pkgName] = calculateJSDocCoverageForPackage(pkgDir);
  }
  return commentCoverage;
}

module.exports = {
  getCommentCoveragePerPackage
};
