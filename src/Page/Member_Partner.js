import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Table_Member_Partner } from './Components/Table_Member_Partner';

function Member_Partner() {
  return (
    <React.Fragment>
      <Sidebar />
      <Table_Member_Partner/>
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

export default Member_Partner;