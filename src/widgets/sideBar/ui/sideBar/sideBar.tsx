import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/langSwitcher'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import cls from './sideBar.module.scss'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { className = '' } = props

  const onToggle = () => { setCollapsed(!collapsed) }
  const { t } = useTranslation()

  return (
    <div
      data-testid ="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <button
        data-testid ="sidebar-toggle"
        onClick={onToggle}>{t('Переключить')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
