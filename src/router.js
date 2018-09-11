import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Schools from './routes/Schools';
import uOttawa from './routes/uOttawa';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/schools" exact component={Schools} />
        <Route path="/schools/uottawa" exact component={uOttawa} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
