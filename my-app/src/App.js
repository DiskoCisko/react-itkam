
import React, { Suspense }  from 'react';
import { connect } from 'react-redux';

import HeaderCAPI from './components/Header/HeaderCAPI';
import LeftMenu from './components/Left_menu/Left_menu';
import { withSuspense } from './HOC/withSuspense';

//import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DiologsContainer';
import UserCAPI from './components/Users/UserCAPI';
import {initializeApp} from './reduxe/app_reducer';
import AuthContainer from './components/auth/AuthContainer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Loader from './components/common/Loader';
import { Provider } from 'react-redux'
import {store} from './reduxe/reduxe';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class  App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      return <Loader/>
    }
    return (
    <>
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
          <Route 
            path="/dialogs"
            render={withSuspense(DialogsContainer)}
          />
          <Route 
            path="/users"
            render={withSuspense(UserCAPI)}
          />
          <Route path="/login">
            <AuthContainer />
          </Route>
            
        </div>
      </main>
    </div>   
    </Router>
    </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const MainApp = (props) => {
  return <Provider store={store}>
  <AppContainer />
</Provider>
}

export default MainApp;
