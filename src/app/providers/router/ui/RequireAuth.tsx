import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { MainPage } from 'pages/mainPage'

export function RequireAuth ({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData)
  const navigate = useNavigate()

  if (!auth) {
    navigate(RoutePath.main)
    return <MainPage />
  }

  return children
}
