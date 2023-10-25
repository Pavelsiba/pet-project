import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/button/button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { LoginModel } from 'features'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      <LoginModel isOpen={isAuthModal} onClose={onCloseModal}/>
    </div>
  )
}
