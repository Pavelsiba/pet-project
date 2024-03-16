import { validateProfileErrors, type Profile } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [validateProfileErrors.NO_DATA]
  }

  const { avatar, first, age, country, lastname } = profile

  const errors: validateProfileErrors[] = []

  if (!first || !lastname) {
    errors.push(validateProfileErrors.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(validateProfileErrors.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(validateProfileErrors.INCORRECT_COUNTRY)
  }

  if (!avatar) {
    errors.push(validateProfileErrors.INCORRECT_AVATAR)
  }

  return errors
}
