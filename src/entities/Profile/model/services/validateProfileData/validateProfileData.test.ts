import { validateProfileData } from './validateProfileData'
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

describe('validateProfileData.test', () => {
  test('success login', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA
    ])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 })

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_AGE
    ])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_COUNTRY
    ])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY,
      validateProfileErrors.INCORRECT_AVATAR
    ])
  })
})
