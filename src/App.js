import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Post from './components/post/PostLayout';
import HomePage from './components/homepage/homePageLayout';
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
      type: "dark",
      
  }
});

class App extends Component{
  render(){
    return (
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path='/login' component = {Login}/>
              <Route path='/register' component = {Register}/>
              <Route path='/post' component = {Post}/>
              <Route path='/home' component = {HomePage}/>
              <Redirect from ='/' to='/home'/>
            </Switch>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
