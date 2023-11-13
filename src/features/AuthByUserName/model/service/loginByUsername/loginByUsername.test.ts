import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { error } from 'console'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const thunk = TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('login with error', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject(error))
    const thunk = TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })
    console.log(result)
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
