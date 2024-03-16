import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileErrors, type ProfileSchema } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

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

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(true))).toEqual({ readonly: true })
  })

  test('test canceledit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    })
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123456' }))).toEqual({
      form: { username: '123456' }
    })
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123456' }))).toEqual({
      form: { username: '123456' }
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [validateProfileErrors.SERVER_ERROR]
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined
    })
  })

  test('test update profile service fullfield', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '', undefined))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data
    })
  })
})
