import { Theme, useTheme } from "App/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LighteIcon from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/button/Button";
import DarkMode from "shared/assets/icons/dark.svg"
import LightMode from "shared/assets/icons/light.svg"


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LighteIcon />}
    </Button>
  );
};
