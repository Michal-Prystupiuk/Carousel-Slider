import React from 'react';

import GlobalStyle from 'global-styles';
import createPortalRouter from 'routers';
import ROUTES from 'routers/Routes';

const App = () => (
  <>
    {createPortalRouter(ROUTES)}
    <GlobalStyle />
  </>
);

export default App;
