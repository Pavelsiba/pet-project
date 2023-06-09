import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'
import cls from './navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t('О сайте')}</AppLink>
      </div>
    </div>
  )
}
