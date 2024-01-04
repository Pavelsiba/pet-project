import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { error } from 'console'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'

describe('loginByUsername.test', () => {
  const { api, dispatch, callThunk } = TestAsyncThunk(loginByUsername)

  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await callThunk({ username: '123', password: '123' })

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('login with error', async () => {
    api.post.mockReturnValue(Promise.reject(error))
    const result = await callThunk({ username: '123', password: '123' })
    console.log(result)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
