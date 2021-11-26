import React from "react";
import Posts from './Post_form';
import {
  render,
  screen
} from '@testing-library/react';
import {store} from './../../reduxe/reduxe';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from "react-router-dom";

const Profiletest = (props) => {
  return <Provider store={store}>
  <Router> 
  < Posts/>
  </Router>
  </Provider>
}


describe("Post component", () => {
  test('should be displayed post', () => {
    render( <Profiletest /> );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});