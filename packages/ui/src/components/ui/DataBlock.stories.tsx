import type { Meta, StoryObj } from '@storybook/react'
import { DataBlock } from './DataBlock'

const meta = {
  title: 'UI/DataBlock',
  component: DataBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Chain ID',
    value: '1',
  },
}

export const WalletAddress: Story = {
  args: {
    label: 'Wallet Address',
    value: '0x0000000000000000000000000000000000000000',
  },
}
