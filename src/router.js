import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SubmitOrg from './routes/SubmitOrg';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/submit" exact component={SubmitOrg} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
