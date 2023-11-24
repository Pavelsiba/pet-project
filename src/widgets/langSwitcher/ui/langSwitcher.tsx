import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/button/button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
  const { className, short = false } = props

  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle} /*eslint-disable-line */
      className={classNames('', {}, [className ?? ''])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}{/* i18next-extract-disable-line */}
    </Button>
  )
})
