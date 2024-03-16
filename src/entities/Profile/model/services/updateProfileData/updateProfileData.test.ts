import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileErrors } from '../../types/profile'

const data = {
  username: 'pavel',
  age: 22,
  lastname: 'pavelsiba',
  first: 'asd',
  city: 'novosib',
  currency: Currency.USD,
  country: Country.Russia,
  avatar: 'avatar'
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const { api, callThunk } = TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await callThunk(undefined)

    expect(api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('update profile data error', async () => {
    const { api, callThunk } = TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await callThunk(undefined)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([validateProfileErrors.SERVER_ERROR])
  })
  test('update profile data error', async () => {
    const { api, callThunk } = TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await callThunk(undefined)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([validateProfileErrors.SERVER_ERROR])
  })

  test('update profile data error', async () => {
    const { callThunk } = TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' }
      }
    })

    const result = await callThunk(undefined)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([validateProfileErrors.INCORRECT_USER_DATA])
  })
})
