import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import PublicLayout from '../layouts/PublicLayout'
import AppRoutes from '../routes/AppRoutes'
import { applyTheme, getInitialTheme, saveTheme, } from '../utils/themeUtils'

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  return (
    <BrowserRouter>
      <AppRoutes
        publicLayout={PublicLayout}
        mainLayout={MainLayout}
        theme={theme}
        onThemeChange={setTheme}
      />
    </BrowserRouter>
  )
}

export default App