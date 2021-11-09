import React from "react"
import { AppTheme } from './contexts/themContext'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import 'animate.css'

const App = props => (
  <AppTheme>
      <GlobalStyles/>
      <AppRoutes />
  </AppTheme>
)


export default App