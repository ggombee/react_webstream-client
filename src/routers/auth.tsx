import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../features/Auth';
import { AuthLayout } from '../Layout/auth';

function AuthRouter(): React.ReactElement {
  return (
    // <AuthLayout>
    <Switch>
      <Route exact path="/auth/login" component={Login} />
    </Switch>
    // </AuthLayout>
  );
}

export default AuthRouter;
