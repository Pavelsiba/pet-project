import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  }
}

export const Secondory: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
  }
}
