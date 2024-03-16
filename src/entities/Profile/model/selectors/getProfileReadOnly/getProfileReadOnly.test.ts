import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnly test', () => {
  test('should return profile readonly true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })

  test('should return profile readonly false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(false)
  })

  test('should work with empty readonly', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
  })
})
