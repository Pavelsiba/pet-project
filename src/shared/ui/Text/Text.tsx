import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo, type FC } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextProps> = memo((props) => {
  const { className = '', title, text, theme = TextTheme.PRIMARY } = props

  return (
    <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
      {typeof title !== 'undefined' && <p className={cls.title}>{ title }</p>}
      {typeof text !== 'undefined' && <p className={cls.text}>{ text }</p>}
    </div>
  )
})
