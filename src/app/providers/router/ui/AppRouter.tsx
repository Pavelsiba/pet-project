import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  routeConfig,
  type AppRoutesProps
} from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/pageLoader/PageLoader'
import { RequireAuth } from './RequireAuth'

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
  )
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        route.authOnly != null && route.authOnly
          ? (<RequireAuth>{element}</RequireAuth>)
          : (element)
      }
    />
  )
}

export const AppRouter = () => {
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
