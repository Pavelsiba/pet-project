import { FC, useMemo, useState } from 'react'
import {Theme,LOCAL_STORAGE_THEME_KEY, ThemeContext} from '../lib/themeContext'

const defaultTheme:Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider:FC = ({children}) => {

  const[theme,setTheme]=useState<Theme>(defaultTheme)
 

  const defaultProps = useMemo(()=>({
    theme,
    setTheme: setTheme
  }),[theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider