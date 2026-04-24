import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { ICacheService } from '../interfaces/ICacheService'

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)

export class DynamoDBCacheService implements ICacheService {
  private readonly _tableName: string

  constructor(params: { configProvider: IConfigurationProvider }) {
    this._tableName = params.configProvider.getConfigurationItem({ name: 'CACHE_TABLE_NAME' })
  }

  async get<T>(key: string): Promise<T | undefined> {
    try {
      const response = await docClient.send(
        new GetCommand({
          TableName: this._tableName,
          Key: { id: key },
        }),
      )

      if (!response.Item) return undefined

      // Check TTL manually in case DynamoDB's background process hasn't purged it yet
      const now = Math.floor(Date.now() / 1000)
      if (response.Item.expiresAt && response.Item.expiresAt < now) {
        return undefined
      }

      return JSON.parse(response.Item.value as string) as T
    } catch (error) {
      console.warn(`[DynamoDBCacheService] Failed to get cache for key ${key}:`, error)
      return undefined // Fail open (act as cache miss)
    }
  }

  async set<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
    try {
      const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds

      await docClient.send(
        new PutCommand({
          TableName: this._tableName,
          Item: {
            id: key,
            value: JSON.stringify(value),
            expiresAt,
          },
        }),
      )
    } catch (error) {
      console.warn(`[DynamoDBCacheService] Failed to set cache for key ${key}:`, error)
    }
  }
}
