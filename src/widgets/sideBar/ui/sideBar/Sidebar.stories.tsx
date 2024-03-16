import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Sidebar } from './sideBar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar

} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: {} }
    })],
  args: {}
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: {} }
    })
  ],
  args: {}
}

export const NoAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {}
    })
  ],
  args: {}
}
