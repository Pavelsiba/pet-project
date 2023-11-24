import { memo, type FC } from 'react'
import cls from './SideBarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink'
import { type SideBarItemType } from 'widgets/sideBar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'

interface SideBarItemProps {
  item: SideBarItemType
  collapsed: boolean
}

export const SideBarItem: FC<SideBarItemProps> = memo((props) => {
  const { item, collapsed } = props
  const { t } = useTranslation()

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to = {item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
