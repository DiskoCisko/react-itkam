import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import HeaderCAPI from './components/Header/HeaderCAPI.tsx';
import LeftMenu from './components/Left_menu/Left_menu.tsx';
import withSuspense from './HOC/withSuspense';

import { initializeApp } from './reduxe/app_reducer';

import AuthContainer from './components/auth/AuthContainer.tsx';

import './App.css';
import Loader from './components/common/Loader';
import { AppStateType, store } from './reduxe/reduxe';

const ProfileContainer = React.lazy(() => {
  return import('./components/Profile/ProfileContainer.tsx');
});
// const DialogsContainer = React.lazy(() => {
//   return import('./components/Dialogs/DiologsContainer');
// });
const UserCAPI = React.lazy(() => {
  return import('./components/Users/UserCAPI.tsx');
});

class App extends React.Component<PropsType> {
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
              {/* <Route path="/dialogs" render={withSuspense(DialogsContainer)} /> */}
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

type PropsType = MapStateToPropsType & MapDispatcheToPropsType;

type MapStateToPropsType = {
  isAuth: boolean;
  initialized: boolean;
};

type MapDispatcheToPropsType = {
  initializeApp: () => (dispatch: any) => void;
};

type OwnProps = {};

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
  };
};
const AppContainer = connect<
  MapStateToPropsType,
  MapDispatcheToPropsType,
  OwnProps,
  AppStateType
>(mapStateToProps, {
  initializeApp,
})(App);

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
