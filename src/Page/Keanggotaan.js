import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Tambah_Data } from './Components/Tambah_Data';
import { Identification_Screen } from './Components/Identification_Screen';
import { Partner_Address } from './Components/Partner_Address';
import { Partner_Communication } from './Components/Partner_Communication';
import { Member_Screen } from './Components/Member_Screen';
import { Table_Partner } from './Components/Table_Partner';
import Check_Token from './Components/Check_Token';

function Keanggotaan() {
  return (
    <React.Fragment>
      <Check_Token />
      <Sidebar />
      <Table_Partner/>
      {/* <Router>
        <Switch>
          <Route exact path="/Identification_Screen" component={Identification_Screen} />
          <Route path="/Partner_Address" component={Partner_Address} />
          <Route path="/Partner_Communication" component={Partner_Communication} />
          <Route path="/Member_Screen" component={Member_Screen} />
        </Switch>
      </Router> */}
    </React.Fragment>
  );
}

export default Keanggotaan;
