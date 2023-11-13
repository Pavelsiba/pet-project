import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import loginSlice, { loginActions, loginReducer } from './loginSlice'
import { loginByUsername } from '../service/loginByUsername/loginByUsername'

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('12345'))).toEqual({ username: '12345' })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' }
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123456'))).toEqual({ password: '123456' })
  })

  test('test isLoading for pending', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false }
    const action = loginByUsername.pending
    expect(loginSlice(state as LoginSchema, action).isLoading).toBe(true)
    expect(loginSlice(state as LoginSchema, action).error).toEqual(undefined)
  })
  test('test isLoading for fullfield', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false }
    const action = loginByUsername.fulfilled
    expect(loginSlice(state as LoginSchema, action).isLoading).toBe(false)
  })
  test('test isLoading for rejected', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false }
    const action = loginByUsername.rejected
    expect(loginSlice(state as LoginSchema, action).isLoading).toBe(false)
    expect(loginSlice(state as LoginSchema, action).error).toEqual(state.error)
  })
})
