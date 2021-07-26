import React from 'react';
import HeaderCAPI from './components/Header/HeaderCAPI';
import LeftMenu from './components/Left_menu/Left_menu';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DiologsContainer';
import UserCAPI from './components/Users/UserCAPI';
import AuthContainer from './components/auth/AuthContainer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router> 
    <div className="App">
      <HeaderCAPI />
      <main className="main">
        <LeftMenu />
        <div className="content">
            
            {/* <Profile /> */}
            <Route path="/profile/:userId?">
            <ProfileContainer />
            </Route>
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
            <Route path="/users">
              <UserCAPI />
            </Route>
            <Route path="/login">
              <AuthContainer />
            </Route>
            
        </div>
      </main>
    </div>   
    </Router>
  );
}

export default App;
