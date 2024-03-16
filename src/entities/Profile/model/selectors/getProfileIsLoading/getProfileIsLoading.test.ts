import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading test', () => {
  test('should return profile isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should return profile isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })

  test('should work with empty isLoading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
