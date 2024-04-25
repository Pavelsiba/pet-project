import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SideBarItemType {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
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
    text: 'Профиль',
    authOnly: true
  },
  {
    path: RoutePath.article,
    icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true
  }
]
