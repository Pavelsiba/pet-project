import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/button/button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/modal/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        { /* eslint-disable*/ }
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatibus consectetur accusamus delectus recusandae harum repudiandae optio dignissimos exercitationem dolorum beatae quis cupiditate suscipit nam quisquam itaque, velit deserunt amet.
      </Modal>
    </div>
  )
}
