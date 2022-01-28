import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const withSuspense = (Component) => {
  const withSuspenseLoader = (props) => {
    return (
      <Route>
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      </Route>
    );
  };
  return withSuspenseLoader;
};

export default withSuspense;
