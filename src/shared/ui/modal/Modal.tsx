import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen = false, onClose, lazy = false } = props
  const { theme = Theme.LIGHT } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const mods: Mods = { [cls.opened]: isOpen }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
    return () => { setIsMounted(false) }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (typeof onClose !== 'undefined') {
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

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
