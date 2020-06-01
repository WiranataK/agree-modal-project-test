import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Page/Components/Sidebar';
import { Tambah_Data } from './Page/Components/Tambah_Data';
import { Identification_Screen } from './Page/Components/Identification_Screen';
import { Partner_Address } from './Page/Components/Partner_Address';
import { Partner_Communication } from './Page/Components/Partner_Communication';
import { Member_Screen } from './Page/Components/Member_Screen';

function Main() {
  return (
    <React.Fragment>
      <Sidebar />
      <Tambah_Data />
      <Router>
        <Switch>
          <Route exact path="/Identification_Screen" component={Identification_Screen} />
          <Route path="/Partner_Address" component={Partner_Address} />
          <Route path="/Partner_Communication" component={Partner_Communication} />
          <Route path="/Member_Screen" component={Member_Screen} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Main;
