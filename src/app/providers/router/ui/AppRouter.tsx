import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/pageLoader/PageLoader'

export const AppRouter = () => {
  const elements = useRoutes(Object.values(routeConfig))

  return (
    <Suspense fallback={<PageLoader/>}>
      {elements}
    </Suspense>
  )
}

// export default AppRouter
