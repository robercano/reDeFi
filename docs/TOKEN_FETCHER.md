# Token Fetcher Architecture

## Overview

This document outlines the proposed architecture for fetching, storing, and serving a list of
supported crypto tokens and their icons via the SDK's `TokenManager`. The architecture is designed
to integrate seamlessly with the existing Serverless Stack (SST) environment (AWS Lambdas, S3,
DynamoDB/RDS, and Redis) without the need for containerized environments like Docker.

## High-Level Architecture

### 1. Fetching Token Data (On-Command)

Instead of a scheduled cron job, the synchronization process can be run on command using one of the
following approaches depending on your workflow needs:

- **SST CLI Script (Recommended for Developers/CI):** Create a standalone Node.js script (e.g.,
  `scripts/sync-tokens.ts`) using the SDKs and database clients. It can be triggered locally or from
  a CI/CD pipeline using the command: `pnpm sst bind "tsx scripts/sync-tokens.ts"`. This runs on the
  executor's machine but securely connects to live AWS resources.
- **Admin API Endpoint:** Create a secured REST or GraphQL mutation endpoint (e.g.,
  `POST /admin/sync-tokens`) protected by API keys or IAM authentication. This is best if the sync
  is triggered by a back-office web dashboard or a 3rd-party webhook.
- **Manual Lambda Invocation:** Deploy the fetching logic as an isolated AWS Lambda function without
  an API Gateway trigger. The function is invoked manually via the AWS Console or AWS CLI
  (`aws lambda invoke`) when needed.

### 2. Storing Data

The current serverless ecosystem natively supports both file and structured data storage without
requiring Docker.

- **Images (Icons):** Downloaded token icons should be stored in an **Amazon S3 Bucket** (via SST's
  `Bucket` construct). URL paths to these icons will be referenced in the database.
- **Metadata:** Token details (name, symbol, address, chain ID, decimals, and the S3 image URL)
  should be stored in a database.
  - **DynamoDB:** A NoSQL serverless database (via SST's `Table` construct) is highly scalable and
    cost-effective for reading token lists.
  - **Postgres (RDS):** If an existing SQL database is already provisioned (e.g., via the existing
    `db:migrate` setup in the project), creating a new `Tokens` table there is also a perfectly
    valid approach.

### 3. Serving Data to the SDK

1. **API Gateway:** Define an endpoint within the existing `Api` construct
2. **Caching:** Since token lists are read-heavy and slowly changing, the Lambda servicing this
   endpoint should query the database and cache the serialized list in the existing **Redis**
   structure (`stacks/redis.ts`). This guarantees low latency to the SDK.
3. **SDK Client (`TokenManager`):** The `TokenManager` simply issues an HTTP GET or GraphQL request
   to this API Gateway endpoint to feed client applications.

## Why Not Docker?

Given the current infrastructure natively uses AWS Serverless computing managed by SST, introducing
a Docker container (via ECS or Fargate) to fetch or serve this list is considered an anti-pattern:

- It breaks the pay-per-request pricing model by introducing persistent compute costs.
- It adds significant maintenance complexity (orchestration, load balancing, networking).
- Serverless AWS resources (Lambda, S3, DynamoDB/RDS) can seamlessly handle fetching and serving
  token lists at a fraction of the cost.
