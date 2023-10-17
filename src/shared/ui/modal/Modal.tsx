import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useCallback, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className = '', children, isOpen = false, onClose } = props

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
