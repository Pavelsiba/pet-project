import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm test', () => {
  test('should return profile form', () => {
    const form = {
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
        form
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
  test('should work with empty state form', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
