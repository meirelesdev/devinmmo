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
import PageNewsSingle from "../pages/NewsInfo";

const AppRoutes = () => {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={PageHome} />
            <Route exact={true} path="/games/:id" component={PageGame} />
            <Route exact={true} path="/games" component={PageGames} />
            <Route exact={true} path="/news/:id" component={PageNewsSingle} />
            <Route exact={true} path="/news" component={PageNews} />
            <Route path="*" component={()=><h1>Pagina não encontrada</h1>} />
          </Switch>
      </BrowserRouter>
    )
  }

export default AppRoutes