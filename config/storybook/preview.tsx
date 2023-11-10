import type { Preview } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
