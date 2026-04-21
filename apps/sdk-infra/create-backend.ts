export const createBackend = async ({
  production,
  deployedVersion,
  sdkGateway,
  authorizerId,
}: {
  production: boolean
  deployedVersion: string
  sdkGateway: sst.aws.ApiGatewayV2
  authorizerId: any
}) => {
  // check with regexp if version is in format X.Y.Z
  if (!/^\d+\.\d+\.\d+$/.test(deployedVersion)) {
    throw new Error(`Deployed version tag "${deployedVersion}" is not in the format X.Y.Z`)
  }
  // take first char of deployedVersion to derive apiVersion
  const apiVersion = `v${deployedVersion.charAt(0)}`
  // check with regexp if api version is in format vX
  if (!/^v\d$/.test(apiVersion)) {
    throw new Error(`API version tag "${apiVersion}" is not in the format vX`)
  }

  let environmentVariables
  try {
    const imported = await import('./sst-environment')
    environmentVariables = imported.environmentVariables
  } catch (error: any) {
    throw new Error(`Failed to load environment variables: ${error.message}`)
  }

  const nameSuffix = deployedVersion.replaceAll('.', 'x')

  // create and deploy function
  const sdkBackend = new sst.aws.Function(`SdkBackendV${nameSuffix}`, {
    handler: 'apps/api-router/src/index.handler',
    runtime: 'nodejs22.x',
    timeout: '30 seconds',
    environment: environmentVariables,
    logging: {
      format: 'json',
      retention: production ? '1 month' : '1 day',
    },
    concurrency: {
      provisioned: production ? 10 : undefined,
    },
  })

  // Create a separate Lambda for OPTIONS
  const optionsHandler = new sst.aws.Function(`SdkOptionsHandlerV${nameSuffix}`, {
    handler: 'apps/api-router/src/options.handler',
    runtime: 'nodejs22.x',
    timeout: '10 seconds',
    logging: {
      format: 'json',
      retention: production ? '1 month' : '1 day',
    },
  })

  const pathOld = `/api/sdk/${apiVersion}` // Old path for backward compatibility
  const path = `/sdk/trpc/${apiVersion}`

  sdkGateway.route(`ANY ${pathOld}/{proxy+}`, sdkBackend.arn, {
    auth: { lambda: authorizerId },
  })
  sdkGateway.route(`ANY ${path}/{proxy+}`, sdkBackend.arn, {
    auth: { lambda: authorizerId },
  })

  sdkGateway.route(`OPTIONS ${pathOld}/{proxy+}`, optionsHandler.arn)
  sdkGateway.route(`OPTIONS ${path}/{proxy+}`, optionsHandler.arn)

  return {
    url: $interpolate`${sdkGateway.url}${path}`,
  }
}
