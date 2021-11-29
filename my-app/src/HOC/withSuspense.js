import React, { Suspense } from 'react';
import Loader from './../components/common/Loader';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
export let withSuspense = (Component) => {
    const withSuspenseLoader = (props) => {
        return <Route>
            <Suspense fallback={<Loader/>}>
                <Component {...props}/>
            </Suspense>
        </Route>
    }
    return withSuspenseLoader
}