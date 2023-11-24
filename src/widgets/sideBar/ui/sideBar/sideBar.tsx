import { memo, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/langSwitcher'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import cls from './sideBar.module.scss'
import { ButtonTheme, Button, ButtonSize } from 'shared/ui/button/button'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import { SidebarItemsList } from 'widgets/sideBar/model/items'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { className = '' } = props
  const onToggle = () => { setCollapsed(!collapsed) }

  return (
    <div
      data-testid ="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button
        data-testid ="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >{collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SideBarItem item={item} key={item.path} collapsed={collapsed}/>
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
})
