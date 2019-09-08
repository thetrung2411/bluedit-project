import React, { Component } from 'react';
import './App.css';

import jwtDecode from "jwt-decode";
import axiosConfig from "./axiosConfig"
import { logoutUser, getUserData } from "./redux/actions/userActions"

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import login from './components/login-register/login';
import register from './components/login-register/register';
import Post from './components/post/PostLayout';
import HomePage from './components/homepage/homePageLayout';
import { Provider } from 'react-redux';
import store from './redux/store';
//import bookmark from './components/bookmark/BookmarkForm';
import ReportPage from './components/report/ReportPage';
import ReportDetail from './components/report/ReportDetail';
import userpage from './components/userpage/userpage';
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";
import { SET_AUTHENTICATED } from './redux/types';

const theme = createMuiTheme({
  palette: {
    type: "dark",

  },

});

//fix: refresh page cause redux lost user details
//get the token from local storage 
const authToken = localStorage.FBToken;
if (authToken) {
  const decodedAuthToken = jwtDecode(authToken);
  //extra security: if the token is expired, log user out and redirect the user to /login 
  if (decodedAuthToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axiosConfig.defaults.headers.common['Authorization'] = authToken;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>

          <CssBaseline />
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path='/login' component={login} />
                <Route path='/register' component={register} />
                <Route path='/post' component={Post} />
                <Route path='/home' component={HomePage} />
                <Route path='/report' exact component={ReportPage} />
                <Route path='/userpage' component={userpage} />
                <Route path='/report/reportss' component={ReportDetail} />
                <Redirect from='/' to='/home' />
              </Switch>
            </div>
          </BrowserRouter>

        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
