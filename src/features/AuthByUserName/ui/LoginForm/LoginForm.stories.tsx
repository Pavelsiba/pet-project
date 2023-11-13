import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: false }
  })]
}

export const Dark: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: false }
  }), ThemeDecorator(Theme.DARK)]
}

export const WithError: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: false, error: 'Error' }
  })]
}

export const Loading: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
  })]
}
