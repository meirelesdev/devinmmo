import React from "react"
import { AppTheme } from './contexts/themeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { DataProvider } from "./contexts/dataContext"
import CommentsProvider from "./hooks/useComments";
import AppRoutes from './routes'
import 'animate.css'

const App = () => {
  return(
    <AppTheme>
      <GlobalStyles />
      <DataProvider>
        <CommentsProvider >
          <AppRoutes />
        </CommentsProvider>
      </DataProvider>
    </AppTheme>
  )
}

export default App
