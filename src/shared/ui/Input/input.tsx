import { classNames } from 'shared/lib/classNames/classNames'
import cls from './input.module.scss'
import { memo, type FC, type InputHTMLAttributes } from 'react'
import { Trans } from 'react-i18next'
import { type Mods } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    autoFocus,
    placeholder,
    readonly,
    ...otherProps
  } = props

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mode: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.inputWrapper, mode, [className])}>
      <Trans _translateProps={['placeholder']}>
        <input
          className={cls.input}
          type={type}
          value={value}
          onChange={changeHandler}
          autoFocus={autoFocus}
          placeholder={placeholder}
          readOnly={readonly}
          {...otherProps}/>
      </Trans>
    </div>)
})
