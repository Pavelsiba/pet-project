import { classNames } from 'shared/lib/classNames/classNames'
import cls from './input.module.scss'
import { memo, type FC, type InputHTMLAttributes } from 'react'
import { Trans } from 'react-i18next'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className = '',
    value, onChange,
    type = 'text',
    autoFocus,
    placeholder,
    ...otherProps
  } = props

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <Trans _translateProps={['placeholder']}>
        <input
          className={cls.input}
          type={type}
          value={value}
          onChange={changeHandler}
          autoFocus={autoFocus}
          placeholder={placeholder}
          {...otherProps}/>
      </Trans>
    </div>)
})
