import ArticleDetailsPage from './ArticleDetailsPage'
import type { Meta, StoryObj } from '@storybook/react'
// import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
// import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/ArticleDetailsPage',
  component: ArticleDetailsPage

} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [StoreDecorator({})],
  args: {}
}
