import { describe, expect, it } from 'vitest'
import { multicall3Abi } from './multicall3Abi'

describe('multicall3Abi', () => {
  it('exports a single-element ABI array', () => {
    expect(Array.isArray(multicall3Abi)).toBe(true)
    expect(multicall3Abi).toHaveLength(1)
  })

  it('describes the aggregate3 function fragment', () => {
    const [fragment] = multicall3Abi

    expect(fragment.type).toBe('function')
    expect(fragment.name).toBe('aggregate3')
    expect(fragment.stateMutability).toBe('payable')
  })

  it('has the expected Call3[] input components', () => {
    const [fragment] = multicall3Abi
    const [callsInput] = fragment.inputs

    expect(callsInput.name).toBe('calls')
    expect(callsInput.type).toBe('tuple[]')
    expect(callsInput.components.map((c) => c.name)).toEqual(['target', 'allowFailure', 'callData'])
    expect(callsInput.components.map((c) => c.type)).toEqual(['address', 'bool', 'bytes'])
  })

  it('has the expected Result[] output components', () => {
    const [fragment] = multicall3Abi
    const [returnDataOutput] = fragment.outputs

    expect(returnDataOutput.name).toBe('returnData')
    expect(returnDataOutput.type).toBe('tuple[]')
    expect(returnDataOutput.components.map((c) => c.name)).toEqual(['success', 'returnData'])
    expect(returnDataOutput.components.map((c) => c.type)).toEqual(['bool', 'bytes'])
  })
})
