.github/workflows/deploy-lambdas-production.yaml:35:      SUMMER_PRO_PRODUCT_HUB_KEY: ${{ secrets.SUMMER_PRO_PRODUCT_HUB_KEY }}
.github/workflows/deploy-lambdas-production.yaml:78:        run: pnpm prebuild --filter=./packages/* --filter=./external-api/*  --filter=./summerfi-api/*
.github/workflows/deploy-lambdas-production.yaml:81:        run: pnpm build --filter=./packages/* --filter=./external-api/*  --filter=./summerfi-api/*
.github/workflows/deploy-lambdas-staging.yaml:38:      SUMMER_PRO_PRODUCT_HUB_KEY: ${{ secrets.SUMMER_PRO_PRODUCT_HUB_KEY }}
.github/workflows/deploy-lambdas-staging.yaml:81:        run: pnpm prebuild --filter=./packages/* --filter=./external-api/*  --filter=./summerfi-api/*
.github/workflows/deploy-lambdas-staging.yaml:84:        run: pnpm build --filter=./packages/* --filter=./external-api/*  --filter=./summerfi-api/*
.prettierignore:28:summerfi-api/**/src/generated
bin/generate.mjs:23:    'SummerToken.sol',
bin/generate.mjs:25:    'SummerVestingWallet.sol',
bin/generate.mjs:26:    'SummerVestingWalletFactory.sol',
bin/generate.mjs:28:  'rewards-contracts': ['SummerRewardsRedeemer.sol'],
bin/generate.mjs:32:  'gov-contracts': ['SummerStaking.sol'],
package.json:20:    "sst:dev": "sst dev --app summerfi-stack",
package.json:21:    "sst:build": "sst build --app summerfi-stack",
package.json:22:    "sst:deploy:dev": "sst deploy --app summerfi-stack",
package.json:23:    "sst:deploy:staging": "sst deploy --stage staging --app summerfi-stack",
package.json:24:    "sst:deploy:prod": "sst deploy --stage production --app summerfi-stack",
package.json:67:  "name": "summerfi-monorepo",
packages/serverless-shared/src/debank-helpers.ts:25:export const DEBANK_SUPPORTED_PROXY_IDS = ['summer', 'makerdao']
packages/serverless-shared/src/domain-types.ts:110:  summerUsdValue: number
packages/serverless-shared/src/domain-types.ts:111:  summerPercentageChange: number
project/TOKEN_FETCHER.md:29:1. **API Gateway:** Define an endpoint within the existing `Api` construct in `stacks/summer-stack.ts`.
sdk/address-book/common/src/interfaces/IAddressBookManager.ts:7: *              Summer deployments but also to retrieve the addresses of the dependencies of the
sdk/address-book/common/src/interfaces/IAddressBookManager.ts:8: *              Summer system
sdk/protocol-plugins/service/bundle/package.json:2:  "name": "@summer_fi/summerfi-protocol-plugins",
sdk/protocol-plugins/service/src/plugins/common/builders/SwapActionBuilder.ts:31:        fee: step.inputs.summerFee,
sdk/protocol-plugins/service/tests/unit/builders/SwapActionBuilder.spec.ts:83:      summerFee: fee,
sdk/scripts/check-blocks-behind.ts:12:  'summer-protocol',
sdk/scripts/check-blocks-behind.ts:13:  'summer-protocol-base',
sdk/scripts/check-blocks-behind.ts:14:  'summer-protocol-arbitrum',
sdk/scripts/check-blocks-behind.ts:15:  'summer-protocol-sonic',
sdk/scripts/check-blocks-behind.ts:16:  'summer-protocol-hyperliquid',
sdk/scripts/check-blocks-behind.ts:28:  // default chain for "summer-protocol"
sdk/sdk-client/bundle/README-ADMIN.md:6:[SDK Installation Guide](https://summerfi.notion.site/summerfi-sdk-install-guide)
sdk/sdk-client/bundle/README-ADMIN.md:14:import { makeAdminSDK } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:17:  apiDomainUrl: `https://summer.fi`,
sdk/sdk-client/bundle/README-ADMIN.md:18:  clientId: 'your-client-id', // client id is provided by SummerFi to partners
sdk/sdk-client/bundle/README-ADMIN.md:38:import { ChainIds } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:90:import { Address, ArmadaVaultId, getChainInfoByChainId, TokenAmount, MAX_UINT256_STRING } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:273:import { ContractSpecificRoleName } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:336:import { ChainIds, Address, ContractSpecificRoleName } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:391:import { ChainIds, Address, ContractSpecificRoleName } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:442:import { ChainIds, Address, ContractSpecificRoleName } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:495:import { ChainIds, Address, GlobalRoles } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:541:import { ChainIds, Address, GlobalRoles } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:584:import { ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:630:import { ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:708:import { ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README-ADMIN.md:749:import { ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:6:[SDK Installation Guide](https://summerfi.notion.site/summerfi-sdk-install-guide)
sdk/sdk-client/bundle/README.md:14:import { makeSDK } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:17:  apiDomainUrl: `https://summer.fi`,
sdk/sdk-client/bundle/README.md:82:      "token": "SUMR (SummerToken)",
sdk/sdk-client/bundle/README.md:88:      "token": "SUMR (SummerToken)",
sdk/sdk-client/bundle/README.md:157:      "token": "SUMR (SummerToken)",
sdk/sdk-client/bundle/README.md:163:      "token": "SUMR (SummerToken)",
sdk/sdk-client/bundle/README.md:184:import { ChainIds } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:271:} from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:372:} from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:496:} from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:581:    claimableSummerToken: position.claimableSummerToken.toString(),
sdk/sdk-client/bundle/README.md:600:import { ArmadaPositionId, User, ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:688:import { ArmadaPositionId, User, ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:774:import { ArmadaPositionId, User, ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:915:import { Address, ChainIds, TokenAmount } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:1153:import { ChainIds } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:1330:import { makeSDKWithSigner } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:1336:  apiDomainUrl: `https://summer.fi`,
sdk/sdk-client/bundle/README.md:1347:import { makeSDKWithSigner, TokenAmount, ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:1351:  apiDomainUrl: 'https://summer.fi',
sdk/sdk-client/bundle/README.md:1479:import { makeSDKWithSigner, TokenAmount, ChainIds, Address } from '@summer_fi/sdk-client'
sdk/sdk-client/bundle/README.md:1485:  apiDomainUrl: 'https://summer.fi',
sdk/sdk-client/bundle/README.md:1738:  claimedSummerToken: ITokenAmount     // SUMR tokens already claimed
sdk/sdk-client/bundle/README.md:1739:  claimableSummerToken: ITokenAmount   // SUMR tokens available to claim
sdk/sdk-client/bundle/package.json:2:  "name": "@summer_fi/sdk-client",
sdk/sdk-client/bundle/package.json:6:    "name": "summer.fi",
sdk/sdk-client/bundle/package.json:7:    "email": "integration@summer.fi",
sdk/sdk-client/bundle/package.json:8:    "url": "https://summer.fi"
sdk/sdk-client/src/interfaces/simulations/IImportingSimulationManager.ts:7: * for importing a position into the Summer system. This is ingress an external position (i.e.: EOA owned position or
sdk/sdk-client/src/interfaces/simulations/IImportingSimulationManager.ts:8: * a position on a 3rd party service) into the Summer system.
sdk/sdk-client/src/interfaces/simulations/IRefinanceSimulationManager.ts:7: * for refinancing a position in the Summer system. This is moving a position from one product to another in one step.
sdk/sdk-client/src/interfaces/simulations/ISimulationManager.ts:18:  /** Importing simulation: ingressing an external position into the Summer system */
sdk/sdk-common/bundle/package.json:2:  "name": "@summer_fi/sdk-common",
sdk/sdk-e2e/e2e/utils/stringifiers.ts:74:      claimedSummerToken: position.claimedSummerToken.toString(),
sdk/sdk-e2e/e2e/utils/stringifiers.ts:75:      claimableSummerToken: position.claimableSummerToken.toString(),
sdk/sdk-speed-test/src/index.ts:119:// Test getSummerToken
sdk/sdk-speed-test/src/index.ts:120:await testSDKEndpointSpeed('getSummerToken', async () => {
sdk/sdk-speed-test/src/index.ts:121:  return await sdk.armada.users.getSummerToken({
sdk/simulator/service/src/implementation/simulator-engine/reducer/swapReducer.ts:8:  const fromAmountPreSummerFee = step.inputs.inputAmount.divide(
sdk/simulator/service/src/implementation/simulator-engine/reducer/swapReducer.ts:9:    Percentage.createFrom({ value: 100.0 }).subtract(step.inputs.summerFee),
sdk/simulator/service/src/implementation/simulator-engine/reducer/swapReducer.ts:21:        // SummerFee should already have been subtracted by this stage
sdk/simulator/service/src/implementation/simulator-engine/reducer/swapReducer.ts:29:        summerFee: TokenAmount.createFrom({
sdk/simulator/service/src/implementation/simulator-engine/reducer/swapReducer.ts:31:          amount: fromAmountPreSummerFee.multiply(step.inputs.summerFee.toProportion()).amount,
sdk/simulator/service/src/implementation/utils/EstimateSwapFromAmount.ts:17: *    When we perform a swap, we need to account for the summer fee,
sdk/testing-utils/src/mocks/managers/SwapManagerMock.ts:18:  private _summerFeeValue: Percentage = Percentage.createFrom({ value: 0 })
turbo.json:85:    "SUMMER_PRO_PRODUCT_HUB_KEY",
turbo.json:99:    "DUNE_LAZYSUMMER_ACCOUNT_API_KEY",
