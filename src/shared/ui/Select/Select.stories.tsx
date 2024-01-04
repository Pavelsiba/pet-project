import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  args: {
    label: 'укажите значение',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: '1234', content: 'Второй пункт' },
      { value: '12345', content: 'Третий пункт' },
      { value: '123456', content: 'Четвертый пункт' }
    ]
  }
}
