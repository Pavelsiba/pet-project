import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const data = {
  username: 'pavel',
  age: 22,
  lastname: 'pavelsiba',
  first: 'asd',
  city: 'novosib',
  currency: Currency.USD,
  country: Country.Russia
}

describe('fetchProfileData.test', () => {
  test('success login', async () => {
    const { api, callThunk } = TestAsyncThunk(fetchProfileData)
    api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await callThunk(undefined)

    expect(api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('fetch profile data error', async () => {
    const { api, callThunk } = TestAsyncThunk(fetchProfileData)
    api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await callThunk(undefined)

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
