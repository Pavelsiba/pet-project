import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  )
}
