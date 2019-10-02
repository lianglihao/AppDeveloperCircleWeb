import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute';
import { BasicsRouter, UnimpRouter } from './index'

function BasicRoute() {

  return (
    <Router>
      <Switch>
        {BasicsRouter.map(item => (
          <PrivateRoute
            component={item.component}
            exact={item.exact}
            key={item.path}
            path={item.path}
          />
        ))}
        {UnimpRouter.map(item => (
          <Route
            component={item.component}
            exact={item.exact}
            key={item.path}
            path={item.path}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default BasicRoute
