
import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sideBar'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getUserInited, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

const App = () => {
  const { theme = '' } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    console.log('render')
    dispatch(userActions.initAuthUser())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
