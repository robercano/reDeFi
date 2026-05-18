# CI/CD Pipeline Optimizations (AWS Amplify & Turborepo)

This document tracks potential architectural and configuration optimizations to further reduce the AWS Amplify build times for the frontend and backend deployments.

## 1. Move `docs:generate` into Turborepo (Completed ✅)
**Current State:** The pipeline now runs `pnpm turbo run docs:generate`.
**Action Item:** 
- Added a `//#docs:generate` task to `turbo.json`.
- Configured Turbo to cache the HTML output folder (`apps/sdk-demo/public/api-reference`).
- Updated `amplify.yml` to run `pnpm turbo run docs:generate`.
**Benefit:** If SDK code hasn't changed, Turbo instantly restores the HTML files from the cache instead of regenerating them, saving ~30-40 seconds.

## 2. Remove `nvm install 24` from `amplify.yml` (Completed ✅)
**Current State:** AWS Amplify natively provisions Node 24 through AL2023.
**Action Item:** 
- Deleted the `nvm install 24` and `nvm use 24` lines from `amplify.yml`.
**Benefit:** Saves ~20 seconds of unnecessary provisioning overhead per build.

## 3. Decouple the Backend and Frontend Deployments (Architectural)
**Current State:** `npx sst deploy` runs before every single frontend build. Even if only a React component changes, the pipeline pauses for 1-3 minutes while AWS CloudFormation checks the entire backend infrastructure for drift.
**Action Item:** 
- Split the deployments into two separate pipelines/actions.
- Create a GitHub Action specifically for `sst deploy` that only triggers when files in `apps/api-server/` or `packages/` change.
- Remove the `sst deploy` command from the Amplify frontend pipeline entirely.
**Benefit:** Frontend-only changes will deploy instantly without waiting for CloudFormation.

## 4. Enable Vercel Remote Caching (Game Changer)
**Current State:** Turborepo currently only uses local caching (`.turbo` folders) inside the AWS build container and relies on Amplify to zip/unzip the cache.
**Action Item:** 
- Create a free Vercel account.
- Run `npx turbo login` and `npx turbo link` in the root of the project to enable Remote Caching.
- Inject the `TURBO_TOKEN` and `TURBO_TEAM` environment variables into AWS Amplify.
**Benefit:** The AWS Amplify server and local developer machines will share a cloud cache. If a developer runs `pnpm build` locally before pushing, the AWS Amplify server will instantly download the pre-compiled artifacts from the cloud instead of compiling them itself, resulting in near-instant builds.
