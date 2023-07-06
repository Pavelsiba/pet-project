import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/sideBar',
  component: Sidebar

} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = { args: {} }

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {}
}
