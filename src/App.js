import React, {Component} from 'react';
import './App.css';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Post from './components/post/PostLayout';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path='/login' component = {Login}/>
              <Route path='/register' component = {Register}/>
              <Route path='/post' component = {Post}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
