import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Input',
  component: Input
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123'
  }
}

export const Secondory: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: 'Type text',
    value: '123123'
  }
}
