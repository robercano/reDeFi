#!/usr/bin/env bash

# Delete Node.js dependency directories, skipping the traversal of their contents
echo "🧹 Removing node_modules..."
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
find . -name ".pnpm-store" -type d -prune -exec rm -rf '{}' +

# Remove SST build directories
echo "🧹 Removing .sst build artifacts..."
find . -name ".sst" -type d -prune -exec rm -rf '{}' +

# Remove Turbo caches
echo "🧹 Removing .turbo cache directories..."
find . -name ".turbo" -type d -prune -exec rm -rf '{}' +

# Remove framework-specific caches and builds
echo "🧹 Removing framework artifacts (.next, dist, build, coverage, .cache)..."
find . -name ".next" -type d -prune -exec rm -rf '{}' +
find . -name "dist" -type d -prune -exec rm -rf '{}' +
find . -name "build" -type d -prune -exec rm -rf '{}' +
find . -name "coverage" -type d -prune -exec rm -rf '{}' +
find . -name ".cache" -type d -prune -exec rm -rf '{}' +

# Remove TypeScript incremental build info
echo "🧹 Removing tsconfig.tsbuildinfo files..."
find . -name "tsconfig.tsbuildinfo" -type f -delete

echo "✨ Repository cleaned! .env files were preserved."
