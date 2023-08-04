import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
