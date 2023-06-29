import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/button/Button'

interface langSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<langSwitcherProps> = (props) => {
  const { className } = props

  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className ?? ''])}
    >
      {t('Язык')}
    </Button>
  )
}
