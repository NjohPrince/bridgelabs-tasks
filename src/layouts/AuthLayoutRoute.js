import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

const AuthLayout = ({children}) => {
    return (
        <Fragment>
            <main>{children}</main>
        </Fragment>
    );
}

const AuthLayoutRoute = ({ component: Component,...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        )}
      />
    );
  };

export default AuthLayoutRoute;
