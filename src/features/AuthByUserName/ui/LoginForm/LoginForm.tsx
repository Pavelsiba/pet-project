import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/input'
import { Button } from 'shared/ui/button/button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className = '' } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input type='text' className={cls.input} placeholder={t('Введите логин')} autoFocus/>
      <Input type='text' className={cls.input} placeholder={t('Введите пароль')} />
      <Button
        className={cls.loginBtn}
      > {t('Войти')}
      </Button>
    </div>
  )
}
