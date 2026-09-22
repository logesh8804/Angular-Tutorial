import { BrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import PublicLayout from '../layouts/PublicLayout'
import AppRoutes from '../routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes
        publicLayout={PublicLayout}
        mainLayout={MainLayout}
      />
    </BrowserRouter>
  )
}

export default App