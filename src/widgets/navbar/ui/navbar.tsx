import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import cls from "./navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
