import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = { args: {} }

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {}
}
