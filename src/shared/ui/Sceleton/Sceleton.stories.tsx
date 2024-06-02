import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Sceleton } from './Sceleton'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Sceleton',
  component: Sceleton

} satisfies Meta<typeof Sceleton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
}
export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
}

export const NormalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    width: '100%',
    height: 200
  }
}
export const CircleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
}
