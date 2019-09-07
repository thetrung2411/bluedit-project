import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import login from "./components/login-register/login";
import register from "./components/login-register/register";
import Post from "./components/post/PostLayout";
import HomePage from "./components/homepage/homePageLayout";
import { Provider } from "react-redux";
import store from "./redux/store";
//import bookmark from './components/bookmark/BookmarkForm';
import Report from "./components/reportpage/reportpageItem";
import userpage from "./components/userpage/userpage";
import BookmarkItem from "./components/bookmark/BookmarkForm";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";
import { SET_AUTHENTICATED } from "./redux/types";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/login" component={login} />
                <Route path="/register" component={register} />
                <Route path="/post" component={Post} />
                <Route path="/home" component={HomePage} />
                <Route path="/report" component={Report} />
                <Route path="/userpage" component={userpage} />
                <Route path="/Bookmark" component={BookmarkItem} />
                <Redirect from="/" to="/home" />
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
