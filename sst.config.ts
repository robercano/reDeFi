/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  async app(input) {
    const { isPersistentStage } = await import('./apps/sdk-infra/sst-utils')

    return {
      name: 'sdk-sst',
      removal: isPersistentStage(input?.stage || '') ? 'retain' : 'remove',
      protect: isPersistentStage(input?.stage || ''),
      home: 'aws',
      providers: { aws: '6.81.0' },
    }
  },
  async run() {
    const { isProductionStage } = await import('./apps/sdk-infra/sst-utils')
    const { sdkDeployedVersionsMap } = await import('./apps/sdk-infra/sst-environment')
    const { createBackend } = await import('./apps/sdk-infra/create-backend')

    const production = isProductionStage($app.stage)
    const deployedVersions = Object.values(sdkDeployedVersionsMap)

    // Load bundle package details
    const { version: clientVersion } = await import('./packages/sdk/client/bundle/package.json')

    if (!deployedVersions.includes(clientVersion)) {
      throw new Error(
        `Client version ${clientVersion} is not in the list of deployed versions: ${deployedVersions.join(', ')}. Please update SDK_DEPLOYED_VERSIONS_MAP var in GitHub environment with a newly deployed version to allow deployment.`,
      )
    }

    // Keep the bucket but remove JSON file mapping based on user reqs
    const sdkBucket = new sst.aws.Bucket('SdkBucket', {
      access: 'public',
      enforceHttps: true,
    })

    // Create the generic Authorizer Lambda
    const sdkAuthorizer = new sst.aws.Function('SdkAuthorizer', {
      handler: 'apps/api-authorizer/src/index.handler',
      runtime: 'nodejs22.x',
      environment: {
        SDK_API_KEY: process.env.SDK_API_KEY || 'default-dev-key',
      },
      logging: {
        format: 'json',
        retention: production ? '1 month' : '1 day',
      },
    })

    // ApiGateway with custom lambda authorizer attached globally
    const sdkGateway = new sst.aws.ApiGatewayV2('SdkGateway', {
      accessLog: {
        retention: production ? '1 month' : '1 day',
      },
    })

    const apiKeyAuthorizer = sdkGateway.addAuthorizer({
      name: 'apiKeyAuthorizer',
      lambda: {
        function: sdkAuthorizer.arn,
        identitySources: ['$request.header.x-api-key'],
        response: 'simple',
      },
    })

    const tokensTable = new sst.aws.Dynamo('TokensTable', {
      fields: {
        id: 'string', // format: chainId#address
        symbol: 'string',
      },
      primaryIndex: { hashKey: 'id' },
      globalIndexes: {
        symbolIndex: { hashKey: 'symbol' },
      },
    })

    const cacheTable = new sst.aws.Dynamo('CacheTable', {
      fields: {
        id: 'string',
      },
      primaryIndex: { hashKey: 'id' },
      ttl: 'expiresAt',
    })

    new sst.aws.Cron('FetchTokensCron', {
      schedule: 'rate(1 day)',
      job: {
        handler: 'apps/jobs/src/fetchTokens.handler',
        runtime: 'nodejs22.x',
        timeout: '5 minutes',
        link: [tokensTable, sdkBucket],
      },
    })

    const backendUrls: $util.Output<string>[] = []

    for (const version of deployedVersions) {
      try {
        const result = await createBackend({
          deployedVersion: version,
          production,
          sdkGateway,
          authorizerId: apiKeyAuthorizer.id,
          tokensTable,
          cacheTable,
        })
        backendUrls.push(result.url)
      } catch (error) {
        console.error(`Failed to create backend for version ${version}:`, error)
        throw error
      }
    }

    sdkGateway.url.apply((gatewayUrl) => {
      const apiKey = process.env.SDK_API_KEY || 'default-dev-key'
      const baseUrl = `${gatewayUrl}/sdk/trpc/`
      require('fs').appendFileSync('.env.local', `NEXT_PUBLIC_API_URL='${baseUrl}'\nNEXT_PUBLIC_API_KEY='${apiKey}'\n`)
    })

    return {
      Stage: $app.stage,
      SdkBackendUrls: backendUrls, // Maps Pulumi outputs cleanly
    }
  },
})
