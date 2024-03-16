import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from 'shared/assets/test/storybook.jpg'
import Ava from 'shared/assets/test/ava.jpg'
import Security from 'shared/assets/test/security.jpg'

const meta = {
  title: 'shared/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  args: {
    size: 150,
    src: AvatarImg
  }
}

export const Hakk: Story = {
  args: {
    size: 150,
    src: Ava
  }
}

export const Secure: Story = {
  args: {
    size: 150,
    src: Security
  }
}

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg
  }
}
