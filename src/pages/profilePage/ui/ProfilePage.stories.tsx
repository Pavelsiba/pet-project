import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/test/storybook.jpg'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'pavel',
          age: 22,
          lastname: 'pavelsiba',
          first: 'asd',
          city: 'novosib',
          currency: Currency.USD,
          country: Country.Russia,
          avatar
        }
      }
    })
  ],
  args: {}
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'pavel',
          age: 22,
          lastname: 'pavelsiba',
          first: 'asd',
          city: 'novosib',
          currency: Currency.USD,
          country: Country.Russia,
          avatar
        }
      }
    })
  ],
  args: {}
}
