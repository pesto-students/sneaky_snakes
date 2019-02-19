import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './components/404/Page404';
import Home from './components/home/Home';
import Header from './components/common/Header';

const App = () => (
  <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </Header>
  </BrowserRouter>
);

export default App;
