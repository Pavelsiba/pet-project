import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description text'
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem ipsum'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Description text'
  }
}
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'Title lorem ipsum',
    text: 'Description text'
  }
}

export const OnlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'Title lorem ipsum'
  }
}

export const OnlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: 'Description text'
  }
}

export const SizeL: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description text',
    size: TextSize.L
  }
}

export const SizeM: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description text',
    size: TextSize.M
  }
}

export const Error: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'Description text',
    theme: TextTheme.ERROR
  }
}
