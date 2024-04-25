import ArticlesPage from './ArticlesPage'
import type { Meta, StoryObj } from '@storybook/react'
// import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
// import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/ArticlesPage',
  component: ArticlesPage

} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [StoreDecorator({})],
  args: {}
}
