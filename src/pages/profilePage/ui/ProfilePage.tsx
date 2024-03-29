import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  profileReducer,
  getProfileForm,
  getProfileValidateErrors,
  validateProfileErrors
} from 'entities/Profile'
import { memo, useEffect, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadOnly)
  const formData = useSelector(getProfileForm)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { t } = useTranslation('profile')

  const validateErrorTranslates = {
    [validateProfileErrors.INCORRECT_AGE]: t('Некорректно указан возраст'),
    [validateProfileErrors.INCORRECT_AVATAR]: t('Некорректное поле avatar'),
    [validateProfileErrors.INCORRECT_COUNTRY]: t('Укажите страну'),
    [validateProfileErrors.INCORRECT_USER_DATA]: t('Укажите корректные данные пользователя'),
    [validateProfileErrors.NO_DATA]: t('Данные не получены'),
    [validateProfileErrors.SERVER_ERROR]: t('Серверная ошибка')
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') { void dispatch(fetchProfileData()) }
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    void dispatch(profileActions.updateProfile({ first: value ?? '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    const validateAge = value?.replace(/\D+/gm, '')
    dispatch(profileActions.updateProfile({ age: Number(validateAge ?? 0) }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }))
  }, [dispatch])

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>)
})

export default ProfilePage
