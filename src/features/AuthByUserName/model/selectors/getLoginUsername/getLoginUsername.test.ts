import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return current value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'asfassa',
        password: '',
        isLoading: false
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('asfassa')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
