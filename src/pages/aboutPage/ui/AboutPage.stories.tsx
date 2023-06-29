import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = { args: {} }

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {}
}
