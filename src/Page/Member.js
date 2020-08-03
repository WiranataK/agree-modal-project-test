import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Table_Member } from './Components/Table_Member';
import Check_Token from './Components/Check_Token';

function Member() {
  return (
    <React.Fragment>
      <Check_Token />
      <Table_Member/>
      <Sidebar active="Keanggotaan"/>
    </React.Fragment>
  );
}

export default Member;
