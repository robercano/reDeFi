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

## 3. Decouple the Backend and Frontend Deployments (Completed ✅)
**Current State:** Deployments are fully decoupled. Backend changes trigger `.github/workflows/deploy-backend.yaml`, while AWS Amplify purely handles the Next.js frontend build.
**Action Item:** 
- Split the deployments into two separate pipelines.
- Created `deploy-backend.yaml` GitHub Action for `sst deploy`.
- Removed `sst deploy` from the Amplify frontend pipeline.
**Benefit:** Frontend-only changes will deploy instantly without waiting for CloudFormation drift-checks, saving 2-3 minutes per build.

## 4. Enable Vercel Remote Caching (Completed ✅)
**Current State:** Turborepo handles caching natively over the cloud using Vercel. 
**Action Item:** 
- Created Vercel account and ran `npx turbo link`.
- Injected `TURBO_TOKEN` and `TURBO_TEAM` into AWS Amplify Console.
- Removed local `.turbo-cache` backup logic from `amplify.yml`.
**Benefit:** Eliminates the heavy AWS Amplify ZIP extraction process for the monorepo cache. Builds will now instantly download pre-compiled artifacts directly from Vercel's servers resulting in near-instant build times across both AWS and local environments.
