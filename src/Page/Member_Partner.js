import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import Table_Member_Partner from './Components/Table_Member_Partner';
import Check_Token from './Components/Check_Token';

function Member_Partner() {
  return (
    <React.Fragment>
      <Check_Token />
      <Sidebar />
      <Table_Member_Partner/>
    </React.Fragment>
  );
}

export default Member_Partner;
