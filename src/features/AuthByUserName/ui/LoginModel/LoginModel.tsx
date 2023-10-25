import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModel.module.scss'
import { Modal } from 'shared/ui/modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModelProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModel: React.FC<LoginModelProps> = (props) => {
  const { className = '', isOpen, onClose } = props

  return (
    <Modal
      className={classNames(cls.loginModel, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>)
}
