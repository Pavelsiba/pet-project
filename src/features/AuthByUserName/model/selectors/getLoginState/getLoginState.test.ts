import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'
import { initialState } from '../../slice/loginSlice'

describe('getLoginState.test', () => {
  test('should return current login data', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123',
        isLoading: false
      }
    }
    expect(getLoginState(state as StateSchema)).toEqual({ username: 'admin', password: '123', isLoading: false })
  })

  test('should return initialState', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(initialState)
  })
})
