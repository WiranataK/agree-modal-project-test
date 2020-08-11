import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './Page/Login';
import Keanggotaan from './Page/Keanggotaan';
import Member from './Page/Member';
import Relasi from './Page/Relasi';
import Member_Partner from './Page/Member_Partner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Perusahaan from './Page/Perusahaan';
import Relasi_Perusahaan from './Page/Relasi_Perusahaan';
import Bank from './Page/Bank';

ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Keanggotaan">
          <Keanggotaan/>
        </Route>
        <Route path="/Member">
          <Member/>
        </Route>
        <Route path="/Relasi">
          <Relasi/>
        </Route>
        <Route path="/MemberPartner/:partner_code">
          <Member_Partner/>
        </Route>
        <Route path="/Perusahaan">
          <Perusahaan/>
        </Route>
        <Route path="/RelasiPerusahaan">
          <Relasi_Perusahaan/>
        </Route>
        <Route path="/Bank">
          <Bank/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
