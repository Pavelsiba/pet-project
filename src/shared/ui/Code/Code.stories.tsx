import { Code } from './Code'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Code',
  component: Code

} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    text: `import { Code } from './Code'
    import type { Meta, StoryObj } from '@storybook/react'
    
    const meta = {
      title: 'shared/Code',
      component: Code
    
    } satisfies Meta<typeof Code>
    
    export default meta
    type Story = StoryObj<typeof meta>`
  }
}
