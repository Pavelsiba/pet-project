import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/langSwitcher";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import cls from "./sideBar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <div
      data-testid ="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button 
      data-testid ="sidebar-toggle"
      onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
