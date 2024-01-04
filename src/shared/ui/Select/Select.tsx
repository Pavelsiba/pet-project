import { memo, useMemo, type FC, type ChangeEvent } from 'react'
import { /* Mods, */ classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
// import { useTranslation } from 'react-i18next'

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, onChange, value, readonly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }
  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={cls.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options])
  // const { t } = useTranslation()

  /* const mods: Mods = {

  } */

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  )
})
