import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Table_Relasi } from './Components/Table_Relasi';
import Check_Token from './Components/Check_Token';

function Relasi() {
  return (
    <React.Fragment>
      <Check_Token />
      <Sidebar active="Keanggotaan"/>
      <Table_Relasi/>
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

export default Relasi;
