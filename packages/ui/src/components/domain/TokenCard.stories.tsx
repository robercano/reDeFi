import type { Meta, StoryObj } from '@storybook/react'
import { TokenCard } from './TokenCard'

const meta = {
  title: 'Domain/TokenCard',
  component: TokenCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TokenCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    token: {
      symbol: 'WETH',
      decimals: 18,
      address: {
        value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      chainInfo: {
        chainId: 1,
      },
      rawObject: 'some other raw data automatically injected',
    },
  },
}
