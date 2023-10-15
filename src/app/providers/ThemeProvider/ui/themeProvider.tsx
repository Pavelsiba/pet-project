import { type FC, useMemo, useState } from 'react'
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/themeContext'

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT /* eslint-disable-line */

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  } = props

  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
