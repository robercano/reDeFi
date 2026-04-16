import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from 'react';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-64">
        <h3 className="text-xl font-bold text-white mb-2">Glassmorphic Card</h3>
        <p className="text-neutral-400 text-sm">
          This card captures the underlying background beautifully while rendering the neon theme glow around its edges.
        </p>
      </div>
    ),
  },
};
