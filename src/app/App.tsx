
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sideBar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme ?? ''])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
