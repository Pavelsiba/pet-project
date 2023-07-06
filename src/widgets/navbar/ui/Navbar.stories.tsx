import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar

} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = { args: {} }

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {}
}
