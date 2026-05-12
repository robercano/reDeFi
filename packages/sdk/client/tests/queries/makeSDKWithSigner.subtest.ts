import { expect } from 'vitest'
import { makeSDKWithSigner } from '../../src/implementation/MakeSDKWithSigner'
import { Signer } from '@ethersproject/abstract-signer'

export default async function makeSDKWithSignerTest() {
  const apiURL = 'http://localhost:3000'
  const mockSigner = {} as Signer

  const sdk = makeSDKWithSigner({ apiURL, signer: mockSigner })
  expect(sdk).toBeDefined()
  expect(sdk.intentSwaps).toBeDefined()

  const apiDomainUrl = 'http://localhost:3000'
  const sdk2 = makeSDKWithSigner({ apiDomainUrl, signer: mockSigner, logging: true })
  expect(sdk2).toBeDefined()
  expect(sdk2.intentSwaps).toBeDefined()

  expect(() => makeSDKWithSigner({ signer: mockSigner } as never)).toThrowError(
    'Either apiDomainUrl or apiURL must be provided',
  )
  expect(() => makeSDKWithSigner({ apiURL } as never)).toThrowError('Signer must be provided.')
}
