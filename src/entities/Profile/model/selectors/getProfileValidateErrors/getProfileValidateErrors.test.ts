import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { validateProfileErrors } from '../../types/profile'

describe('getProfileValidateErrors test', () => {
  test('should return validate error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          validateProfileErrors.INCORRECT_AGE,
          validateProfileErrors.INCORRECT_COUNTRY
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY
    ])
  })

  test('should work with empty validate error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
