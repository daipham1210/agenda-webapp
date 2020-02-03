import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from 'constants/Overview';

const OverviewRoutes = Overview.map(item => (
  <Route exact path={item.path} component={item.component} key={item.id} />
));

const Router = () => {
  return (
    <Switch>
      { OverviewRoutes }
    </Switch>
  );
};

export default Router;
