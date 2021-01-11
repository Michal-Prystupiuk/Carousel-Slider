import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'global-styles';

const createPortalRouter = (routes = []) => (
  <>
    <Switch>
      {routes.map(route => (
        <Route key={route.path || route.key} exact {...route} />
      ))}
    </Switch>

    <GlobalStyle />
  </>
);

export default createPortalRouter;
