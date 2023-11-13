import type { ReducersMapObject, DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducer, ...asyncReducer }}
    >
      <StoryComponent />
    </StoreProvider>
  )
}
