import type { StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'

/* eslint-disable */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
    </ThemeProvider>
  )
}
