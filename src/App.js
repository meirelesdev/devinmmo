import React from "react"
import { AppTheme } from './contexts/themeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import 'animate.css'
import { DataProvider } from "./contexts/dataContext"

import CommentsProvider from "./hooks/useComments";

const App = () => (
  <AppTheme>
    <GlobalStyles />
    <DataProvider>
      <CommentsProvider>
        <AppRoutes />
      </CommentsProvider>
    </DataProvider>
  </AppTheme>
)


export default App