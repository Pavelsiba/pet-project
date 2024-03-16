import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileFirstname } from './getProfileFirstname'

describe('getProfileFirstname test', () => {
  test('should return profile first name ', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'pavel'
        }
      }
    }
    expect(getProfileFirstname(state as StateSchema)).toEqual('pavel')
  })
  test('should work with empty state data first name', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFirstname(state as StateSchema)).toEqual(undefined)
  })
})
