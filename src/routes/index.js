import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

import PageGames from "../pages/Games";
import PageHome from '../pages/Home'
import PageNews from "../pages/News";
import PageGame from "../pages/Game";
import PageNotFound from "../pages/NotFound";

const routes = [
  { path: '/', exact: true, Component: PageHome },
  { path: '/games/:id', exact: false, Component: PageGame },
  { path: '/games', exact: true, Component: PageGames },
  { path: '/news', exact: true, Component: PageNews },
  { path: '*', exact: false, Component: PageNotFound }
]
const AppRoutes = () => {

  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          {routes.map(({ path, exact, Component }) =>
            <Route key={path} exact={exact} path={path}>
                <Component />
            </Route>
          )}
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default AppRoutes