import { memo, useMemo, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/langSwitcher'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import cls from './sideBar.module.scss'
import { ButtonTheme, Button, ButtonSize } from 'shared/ui/button/button'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import { SidebarItemsList } from 'widgets/sideBar/model/items'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { className = '' } = props
  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  const auth = useSelector(getUserAuthData)

  const protectedLink = useMemo(
    () =>
      (auth != null)
        ? SidebarItemsList.filter((el) => !el.authOnly || el.authOnly)
        : SidebarItemsList.filter((el) => !el.authOnly),
    [auth]
  )

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {protectedLink.map((item) => (
          <SideBarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
})
