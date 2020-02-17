import React, { useState, createContext, useEffect } from 'react'
import { isEqual, get } from 'lodash'
import themes from '@theme'
import { useStorage } from '@hooks'

export const ThemesContext = createContext()

export const ThemesContextProvider = props => {
  const { children } = props

  const defaultTheme = themes.default

  const [theme, setTheme] = useState(defaultTheme)

  const storage = useStorage()

  const persistTheme = themeName => {
    const newTheme = get(themes, `${themeName}`)
    if (newTheme) {
      setTheme(newTheme)
      storage.set('kodoku', themeName)
    }
  }

  useEffect(() => {
    const savedThemeName = storage.get('kodoku')

    const savedTheme = get(themes, `${savedThemeName}`)

    if (!isEqual(savedThemeName, 'default') && savedTheme) {
      setTheme(savedTheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemesContext.Provider value={{ theme, setTheme: persistTheme }}>
      {children}
    </ThemesContext.Provider>
  )
}
