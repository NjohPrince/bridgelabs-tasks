import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

const DefaultLayout = ({children}) => {
    return (
        <Fragment>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
        </Fragment>
    );
}

const DefaultLayoutRoute = ({ component: Component,...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    );
  };

export default DefaultLayoutRoute;
