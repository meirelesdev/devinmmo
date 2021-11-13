import React from "react"
import { AppTheme } from './contexts/themContext'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRoutes from './routes'
import 'animate.css'
import { GamesProvider } from "./contexts/gamesContext"
import { NewsProvider } from "./contexts/newsContext"
import CommentsProvider from "./hooks/useComments";

const App = () => (
  <AppTheme>
      <GlobalStyles/>
      <GamesProvider>
        <NewsProvider>
        <CommentsProvider>
            <AppRoutes />
          </CommentsProvider>
        </NewsProvider>
      </GamesProvider>        
  </AppTheme>
)


export default App