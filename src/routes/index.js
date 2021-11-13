import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import PageGames from "../pages/Games";
import PageHome from '../pages/Home'
import PageNews from "../pages/News";
import PageGame from "../pages/Game";
import PageNotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={PageHome} />
            <Route exact={false} path="/games/:id" component={PageGame} />
            <Route exact={true} path="/games" component={PageGames} />
            <Route exact={true} path="/news" component={PageNews} />
            <Route path="*" component={PageNotFound} />
          </Switch>
      </BrowserRouter>
        
    )
  }

export default AppRoutes