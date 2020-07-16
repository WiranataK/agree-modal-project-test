import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './Page/Login';
import Keanggotaan from './Page/Keanggotaan';
import AxiosDummy from './Page/AxiosDummy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Keanggotaan/>
    {/* <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Home">
          <Main/>
        </Route>
        <Route path="/Dummy">
          <AxiosDummy/>
        </Route>
      </Switch>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();