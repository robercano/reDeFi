import { DynamoDBCacheService } from '../src/implementation/DynamoDBCacheService'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IEventBus } from '@thesolidchain/events-common'
import { mockClient } from 'aws-sdk-client-mock'
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb'
import { describe, it, expect, beforeEach, vi } from 'vitest'

const ddbMock = mockClient(DynamoDBDocumentClient)

describe('SDK Server Common | Unit | DynamoDBCacheService', () => {
  let cacheService: DynamoDBCacheService
  let mockConfigProvider: IConfigurationProvider
  let mockEventBus: IEventBus

  beforeEach(() => {
    ddbMock.reset()

    mockConfigProvider = {
      getConfigurationItem: vi.fn().mockReturnValue('test-table-name'),
    } as unknown as IConfigurationProvider

    mockEventBus = {
      on: vi.fn(),
    } as unknown as IEventBus

    cacheService = new DynamoDBCacheService({
      configProvider: mockConfigProvider,
      eventBus: mockEventBus,
    })
  })

  it('should initialize correctly with a table name from config', () => {
    expect(mockConfigProvider.getConfigurationItem).toHaveBeenCalledWith({
      name: 'CACHE_TABLE_NAME',
    })
    expect(mockEventBus.on).toHaveBeenCalledWith('NewBlockMined', expect.any(Function))
  })

  it('should return undefined if cache miss', async () => {
    ddbMock.on(GetCommand).resolves({})

    const result = await cacheService.get('missing-key')
    expect(result).toBeUndefined()
  })

  it('should return undefined if cache item is expired', async () => {
    const pastTime = Math.floor(Date.now() / 1000) - 100 // 100 seconds ago
    ddbMock.on(GetCommand).resolves({
      Item: {
        id: 'expired-key',
        value: JSON.stringify({ data: 'test' }),
        expiresAt: pastTime,
      },
    })

    const result = await cacheService.get('expired-key')
    expect(result).toBeUndefined()
  })

  it('should return the parsed item if cache hit', async () => {
    const futureTime = Math.floor(Date.now() / 1000) + 100 // 100 seconds in the future
    ddbMock.on(GetCommand).resolves({
      Item: {
        id: 'valid-key',
        value: JSON.stringify({ data: 'valid-test' }),
        expiresAt: futureTime,
      },
    })

    const result = await cacheService.get<{ data: string }>('valid-key')
    expect(result).toEqual({ data: 'valid-test' })
  })

  it('should return undefined and not throw if an error occurs during get', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    ddbMock.on(GetCommand).rejects(new Error('DynamoDB Error'))

    const result = await cacheService.get('error-key')
    expect(result).toBeUndefined()
    consoleSpy.mockRestore()
  })

  it('should set an item in the cache successfully', async () => {
    ddbMock.on(PutCommand).resolves({})

    await cacheService.set('new-key', { info: 'stored' }, 60)

    expect(ddbMock.calls()).toHaveLength(1)
    const call = ddbMock.call(0)
    expect(call.args[0].input.TableName).toBe('test-table-name')
    expect(call.args[0].input.Item.id).toBe('new-key')
    expect(call.args[0].input.Item.value).toBe(JSON.stringify({ info: 'stored' }))
    expect(call.args[0].input.Item.expiresAt).toBeGreaterThan(Math.floor(Date.now() / 1000))
  })

  it('should not throw if an error occurs during set', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    ddbMock.on(PutCommand).rejects(new Error('DynamoDB Write Error'))

    await expect(cacheService.set('error-key', { info: 'failed' }, 60)).resolves.toBeUndefined()
    consoleSpy.mockRestore()
  })
})
