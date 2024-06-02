import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../button/button'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { useCallback } from 'react'

interface CodeProps {
  className?: string
  text: string
}

export const Code = (props: CodeProps) => {
  const { className, text } = props

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copy_icon}/>
      </Button>
      <code>{text}</code>
    </pre>
  )
}
