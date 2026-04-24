import { Resource } from 'sst'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, BatchWriteCommand } from '@aws-sdk/lib-dynamodb'
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)
const s3Client = new S3Client({})

interface TokenInfo {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI?: string
}

interface FetchSource {
  name: string
  url: string
  parser: (data: any) => TokenInfo[]
}

const FETCH_SOURCES: FetchSource[] = [
  {
    name: 'Uniswap',
    url: 'https://tokens.uniswap.org',
    parser: (data: any) => data.tokens as TokenInfo[],
  },
  {
    name: '1inch_mainnet',
    url: 'https://tokens.1inch.io/v1.1/1',
    parser: (data: any) => Object.values(data) as TokenInfo[],
  },
  {
    name: '1inch_arbitrum',
    url: 'https://tokens.1inch.io/v1.1/42161',
    parser: (data: any) => Object.values(data) as TokenInfo[],
  },
  {
    name: '1inch_base',
    url: 'https://tokens.1inch.io/v1.1/8453',
    parser: (data: any) => Object.values(data) as TokenInfo[],
  },
]

export const handler = async () => {
  console.log('Fetching tokens from multiple sources...')
  try {
    const tokensMap = new Map<string, TokenInfo>()

    for (const source of FETCH_SOURCES) {
      console.log(`Fetching from ${source.name}...`)
      try {
        const response = await fetch(source.url)
        if (!response.ok) {
          console.warn(`Failed to fetch ${source.name} (status: ${response.status})`)
          continue
        }
        const data = await response.json()
        const parsedTokens = source.parser(data)

        for (const token of parsedTokens) {
          const id = `${token.chainId}#${token.address.toLowerCase()}`
          if (!tokensMap.has(id)) {
            tokensMap.set(id, token)
          } else {
            // If the token already exists, preserve its logoURI if the new one doesn't have it
            const existing = tokensMap.get(id)!
            if (!existing.logoURI && token.logoURI) {
              tokensMap.set(id, token)
            }
          }
        }
      } catch (err) {
        console.warn(`Error fetching/parsing ${source.name}:`, err)
      }
    }

    const tokens = Array.from(tokensMap.values())
    console.log(`Aggregated ${tokens.length} unique tokens across all sources.`)

    const bucketName = Resource.SdkBucket.name
    const region = await s3Client.config.region()
    const baseUrl = `https://${bucketName}.s3.${region}.amazonaws.com`

    console.log(`Fetching existing logos from S3 bucket: ${bucketName}...`)
    const existingLogos = new Set<string>()
    let continuationToken: string | undefined = undefined
    do {
      const listRes = await s3Client.send(
        new ListObjectsV2Command({
          Bucket: bucketName,
          Prefix: 'logos/',
          ContinuationToken: continuationToken,
        }),
      )
      if (listRes.Contents) {
        listRes.Contents.forEach((item) => {
          if (item.Key) existingLogos.add(item.Key)
        })
      }
      continuationToken = listRes.NextContinuationToken
    } while (continuationToken)

    console.log(`Found ${existingLogos.size} existing logos in S3.`)

    // DynamoDB batchWrite can only write 25 items at a time
    const tableName = Resource.TokensTable.name
    const chunkSize = 25
    let newUploadsCount = 0

    for (let i = 0; i < tokens.length; i += chunkSize) {
      const chunk = tokens.slice(i, i + chunkSize)

      const putRequests = await Promise.all(
        chunk.map(async (token) => {
          let finalLogoURI = token.logoURI || null

          if (token.logoURI) {
            let fetchUrl = token.logoURI
            if (fetchUrl.startsWith('ipfs://')) {
              fetchUrl = fetchUrl.replace('ipfs://', 'https://ipfs.io/ipfs/')
            }

            if (fetchUrl.startsWith('http')) {
              const targetKey = `logos/${token.chainId}/${token.address.toLowerCase()}.png`

              if (!existingLogos.has(targetKey)) {
                try {
                  // Try to fetch and upload the image
                  const imgRes = await fetch(fetchUrl)
                  if (imgRes.ok) {
                    const arrayBuffer = await imgRes.arrayBuffer()
                    const buffer = Buffer.from(arrayBuffer)
                    const contentType = imgRes.headers.get('content-type') || 'image/png'

                    await s3Client.send(
                      new PutObjectCommand({
                        Bucket: bucketName,
                        Key: targetKey,
                        Body: buffer,
                        ContentType: contentType,
                        CacheControl: 'public, max-age=31536000, immutable',
                      }),
                    )
                    newUploadsCount++
                    // Add to set to avoid duplicate attempts in the same run
                    existingLogos.add(targetKey)
                  }
                } catch (err) {
                  console.warn(`Failed to upload logo for ${token.symbol} (${fetchUrl}):`, err)
                }
              }

              // Rewrite the logoURI to our S3 bucket URL
              finalLogoURI = `${baseUrl}/${targetKey}`
            }
          }

          return {
            PutRequest: {
              Item: {
                id: `${token.chainId}#${token.address}`,
                chainId: token.chainId,
                address: token.address,
                name: token.name,
                symbol: token.symbol,
                decimals: token.decimals,
                logoURI: finalLogoURI,
              },
            },
          }
        }),
      )

      await docClient.send(
        new BatchWriteCommand({
          RequestItems: {
            [tableName]: putRequests,
          },
        }),
      )

      if ((i + chunkSize) % 500 === 0) {
        console.log(`Processed ${i + chunkSize} tokens...`)
      }
    }

    console.log(`Successfully upserted all tokens to DynamoDB. Uploaded ${newUploadsCount} new logos.`)
  } catch (error) {
    console.error('Failed to fetch and upsert tokens:', error)
    throw error
  }
}
