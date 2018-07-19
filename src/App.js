/*
- add back to home link in NotFound
*/
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './components/Gallery/';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" render={() => <Redirect to='/tag/hulk' />} />
        <Route exact path="/search" component={Gallery} />
        <Route exact path="/tag/:tag" component={Gallery} />
        <Route exact path="/search/:tag" component={Gallery} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
