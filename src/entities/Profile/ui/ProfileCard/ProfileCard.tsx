import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/loader/Loader'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  onChangeLastName?: (value?: string) => void
  onChangeFirstName?: (value?: string) => void
  onChangeUserName?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country?: Country) => void
  readonly?: boolean
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUserName,
    onChangeCurrency,
    onChangeCountry,
    readonly = true
  } = props
  const { t } = useTranslation()

  if (isLoading === true) {
    return (
      <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
    )
  }

  if (error !== undefined) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar !== null &&
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} size={150}/>
          </div>}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstName}
          disabled={readonly}/>
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastName}
          disabled={readonly}/>
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
          disabled={readonly}/>
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          onChange={onChangeCity}
          disabled={readonly}/>
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          onChange={onChangeUserName}
          disabled={readonly}/>
        <Input
          value={data?.avatar}
          placeholder={t('Аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          disabled={readonly}/>
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>)
})
