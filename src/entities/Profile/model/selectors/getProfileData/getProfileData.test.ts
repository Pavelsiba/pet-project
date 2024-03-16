import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData test', () => {
  test('should return profile data', () => {
    const data = {
      username: 'pavel',
      age: 22,
      lastname: 'pavelsiba',
      first: 'asd',
      city: 'novosib',
      currency: Currency.USD,
      country: Country.Russia
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
