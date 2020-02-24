import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import ListPage from './pages/ListPage/ListPage';
import MainPage from './pages/MainPage/MainPage';

function App(props) {
  // const liff = window.liff;
  // useEffect(() => {
  //   liff.init(
  //     { liffId: '1653867994-5qGXAGz1' }
  //   ).then(() => {
  //     // liff.logout();
  //     if (!liff.isLoggedIn()) {
  //       liff.login();
  //     } else {
  //       liff.getProfile().then(profile => {
  //         console.log(profile)
  //         if (profile.userId === 'U43e3ea7e84ab617fe261954704d307f8') {
  //           props.login();
  //         }
  //       })
  //     }
  //   });
  // });

  return props.isLogin ? (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:id'>
            <MainPage />
          </Route>
          <Route path='/'>
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : <LoginPage />
}

const mapStateToProps = state => ({
  isLogin: state.isLogin,
})
const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch({ type: 'login' });
  },
  logout: () => {
    dispatch({ type: 'logout' });
  },
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
