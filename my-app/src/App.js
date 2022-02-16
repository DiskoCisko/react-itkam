import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import HeaderCAPI from './components/Header/HeaderCAPI';
import LeftMenu from './components/Left_menu/Left_menu';
import withSuspense from './HOC/withSuspense';

import { initializeApp } from './reduxe/app_reducer.ts';

import AuthContainer from './components/auth/AuthContainer';

import './App.css';
import Loader from './components/common/Loader';
import { store } from './reduxe/reduxe.ts';

const ProfileContainer = React.lazy(() => {
  return import('./components/Profile/ProfileContainer');
});
const DialogsContainer = React.lazy(() => {
  return import('./components/Dialogs/DiologsContainer');
});
const UserCAPI = React.lazy(() => {
  return import('./components/Users/UserCAPI');
});

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <Router>
        <div className="App">
          <HeaderCAPI />
          <main className="main">
            <LeftMenu />
            <div className="content">
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" render={withSuspense(UserCAPI)} />
              <Route path="/login">
                <AuthContainer />
              </Route>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  initializeApp: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
