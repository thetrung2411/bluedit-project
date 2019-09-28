import React, { Component } from "react";
import "./App.css";
import jwtDecode from "jwt-decode";
import axiosConfig from "./axiosConfig";
import { logoutUser, getUserData } from "./redux/actions/userActions";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import login from "./components/login-register/login";
import register from "./components/login-register/register";
import test from "./components/search/test";
import searching from "./components/search/searching";
import PostLayout from "./components/post/PostLayout";
import HomePageLayout from "./components/homepage/HomePageLayout";
import { Provider } from "react-redux";
import store from "./redux/store";
import bookmark from "./components/bookmark/BookmarkPage";
import ReportPage from "./components/report/ReportPage";
import AdsPage from "./components/ads/AdsPage";
import userpage from "./components/userpage/userpage";
import accountManagement from "./components/accountManagement/accountManagement";
import subscriptions from "./components/subscriptions/subscriptions";
import { userpageLauout } from "./components/userpage/userpageLayout";
import { editProfileLayout } from "./components/editProfile/editProfileLayout";
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

//fixed problem: when refresh page, the redux state is wiped out
//get the token from local storage
const authToken = localStorage.FBToken;
if (authToken) {
  const decodedAuthToken = jwtDecode(authToken);
  //extra security: if the token is expired, log user out and redirect the user to /login
  if (decodedAuthToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    //if the token is yet to expire, re-get the user data
    store.dispatch({ type: SET_AUTHENTICATED });
    axiosConfig.defaults.headers.common["Authorization"] = authToken;
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
                <Route path="/login" component={login} />
                <Route path="/register" component={register} />
                <Route
                  path="/accountManagement"
                  component={accountManagement}
                />
                <Route path="/post" component={PostLayout} />
                <Route path="/home" component={HomePageLayout} />
                <Route path="/report" component={ReportPage} />
                <Route path="/ads" component={AdsPage} />
                <Route path="/subscriptions" component={subscriptions} />
                <Route path="/userpage" component={userpageLauout} />
                <Route path="/editProfile" component={editProfileLayout} />
                <Route path="/bookmark" component={bookmark} />
                <Route path="/searching" component={searching} />
                <Route path="/test" component={test} />
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
