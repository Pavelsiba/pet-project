import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/modal/Modal'
import cls from './LoginModal.module.scss'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { Loader } from 'shared/ui/loader/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className = '', isOpen, onClose } = props

  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>)
}
