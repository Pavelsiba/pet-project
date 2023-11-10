import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './navbar'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar

} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [StoreDecorator({})],
  args: {}
}

export const Dark: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
  args: {}
}

export const AuthNavbar: Story = {
  decorators: [StoreDecorator({
    user: { authData: { id: '1', username: 'admin' } }
  })],
  args: {}
}
