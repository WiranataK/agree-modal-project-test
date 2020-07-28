import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Tambah_Data } from './Components/Tambah_Data';
import { Form_Tambah } from './Components/Form_Tambah';
import { Table_Partner } from './Components/Table_Partner';
import Check_Token from './Components/Check_Token';

function Keanggotaan() {
  return (
    <React.Fragment>
      <Check_Token />
      {/* <Sidebar />
      <Table_Partner/> */}
      <Form_Tambah/>
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
