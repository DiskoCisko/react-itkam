import React from "react";
import Header from './Header';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ReactDOM from 'react-dom';
const HeaderTest = (props) => {
  return <Router>
    < Header / >
  </Router>
}

it('render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeaderTest />, div);
  ReactDOM.unmountComponentAtNode(div)
})
