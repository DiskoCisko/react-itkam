import React from "react";
import Profile from './ProfileContainer';
import {store} from './../../reduxe/reduxe';
import { Provider } from 'react-redux'
import {
  render,
  screen
} from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const Profiletest = (props) => {
  return <Provider store={store}>
  <Router> 
  < Profile/>
  </Router>
  </Provider>
}

 
describe("Profile component", () => {
  test('should be displayed loader', () => {
    render( <Profiletest/> );
    expect(screen.getByAltText('Loading...')).toBeInTheDocument();
  });
});