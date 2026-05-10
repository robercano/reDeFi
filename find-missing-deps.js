const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const searchDirs = [path.join(rootDir, 'packages'), path.join(rootDir, 'apps')];

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git' && file !== '.next') {
        walk(fullPath, callback);
      }
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  }
}

function findNearestPackageJson(filePath) {
  let currentDir = path.dirname(filePath);
  while (currentDir !== '/' && currentDir !== rootDir) {
    const pkgPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      return pkgPath;
    }
    currentDir = path.dirname(currentDir);
  }
  return null;
}

const packageDepsCache = new Map();

function hasDependency(pkgPath, depName) {
  if (!packageDepsCache.has(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const allDeps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
      ...(pkg.peerDependencies || {})
    };
    packageDepsCache.set(pkgPath, allDeps);
  }
  return !!packageDepsCache.get(pkgPath)[depName];
}

let found = false;

searchDirs.forEach(dir => {
  walk(dir, (filePath) => {
    const pkgJsonPath = findNearestPackageJson(filePath);
    if (!pkgJsonPath) return;

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      // Find imports that match @thesolidchain/xxx
      const regex = /(?:from\s+|import\(|require\()['"](@thesolidchain\/[a-zA-Z0-9-]+)[^'"]*['"]/g;
      let match;
      while ((match = regex.exec(line)) !== null) {
        const pkgName = match[1];
        
        if (!hasDependency(pkgJsonPath, pkgName)) {
          console.log(`Missing dependency ${pkgName} in ${pkgJsonPath.replace(rootDir + '/', '')}`);
          console.log(`  Imported in ${filePath.replace(rootDir + '/', '')}:${i + 1}`);
          found = true;
        }
      }
    });
  });
});

if (!found) {
  console.log("No missing internal dependencies found!");
}
