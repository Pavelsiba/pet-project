import type { StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

/* eslint-disable */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
}
