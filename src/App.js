import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import login from './components/login-register/login';
import register from './components/login-register/register';
import Post from './components/post/PostLayout';
import HomePage from './components/homepage/homePageLayout';
<<<<<<< HEAD
import bookmark from './components/bookmark/BookmarkForm';
import ReportPage from './components/reportpage/reportpageItem';
=======
import {Provider} from 'react-redux';
import store from './redux/store'; 
//import bookmark from './components/bookmark/BookmarkForm';
import Report from './components/reportpage/reportpageItem';
>>>>>>> 64ed0654452cc08ec79ec4d49b1df5ee83e946ec
import userpage from './components/userpage/userpage';
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",

  },

});

<<<<<<< HEAD
class App extends Component {
  render() {
=======
//              <Route path='/bookmark' component={bookmark}/>

class App extends Component{
  render(){
>>>>>>> 64ed0654452cc08ec79ec4d49b1df5ee83e946ec
    return (
      <Provider  store = {store}>
      <MuiThemeProvider theme={theme}>
<<<<<<< HEAD
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path='/bookmark' component={bookmark} />
              <Route path='/login' component={login} />
              <Route path='/register' component={register} />
              <Route path='/post' component={Post} />
              <Route path='/home' component={HomePage} />
              <Route path='/report' component={ReportPage} />
              <Route path='/userpage' component={userpage} />
              <Redirect from='/' to='/home' />
            </Switch>
          </div>
        </BrowserRouter>
=======

      <CssBaseline />
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path='/login' component = {login}/>
              <Route path='/register' component = {register}/>
              <Route path='/post' component = {Post}/>
              <Route path='/home' component = {HomePage}/>
              <Route path='/report' component = {Report} />
              <Route path='/userpage' component = {userpage}/>
              <Redirect from ='/' to='/home'/>
            </Switch>
        </div>
      </BrowserRouter>
     
>>>>>>> 64ed0654452cc08ec79ec4d49b1df5ee83e946ec
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
