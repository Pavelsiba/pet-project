import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/test/storybook.jpg'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
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
}

export const WithError: Story = {
  args: {
    error: 'some error'
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
