import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SideBarItemType {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: 'Главная'
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: 'Профиль'
  }
]
