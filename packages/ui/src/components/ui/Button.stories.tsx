import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: { control: 'select', options: ['primary', 'secondary', 'danger'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    intent: 'danger',
    children: 'Danger Button',
  },
}
