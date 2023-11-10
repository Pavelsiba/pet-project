import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/input'
import { Button, ButtonTheme } from 'shared/ui/button/button'
import cls from './LoginForm.module.scss'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUserName/model/service/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className = '' } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    await dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Форма Авторизации')} />
      {typeof error !== 'undefined' && <Text text={t('Вы ввели неверный логин')} theme={TextTheme.ERROR}/>}
      <Input
        type='text'
        onChange = {onChangeUsername}
        className={cls.input}
        placeholder={t('Введите логин')}
        autoFocus
        value={username}
      />
      <Input
        type='text'
        onChange = {onChangePassword}
        className={cls.input}
        placeholder={t('Введите пароль')}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      > {t('Войти')}
      </Button>
    </div>
  )
})
