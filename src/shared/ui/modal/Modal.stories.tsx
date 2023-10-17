import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'ui/Modal',
  component: Modal

} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatibus consectetur accusamus delectus recusandae harum repudiandae optio dignissimos exercitationem dolorum beatae quis cupiditate suscipit nam quisquam itaque, velit deserunt amet.'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatibus consectetur accusamus delectus recusandae harum repudiandae optio dignissimos exercitationem dolorum beatae quis cupiditate suscipit nam quisquam itaque, velit deserunt amet.'
  }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
