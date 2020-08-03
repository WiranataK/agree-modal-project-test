import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Table_Relasi } from './Components/Table_Relasi';
import Check_Token from './Components/Check_Token';

function Relasi() {
  return (
    <React.Fragment>
      <Check_Token />
      <Table_Relasi/>
      <Sidebar active="Keanggotaan"/>
    </React.Fragment>
  );
}

export default Relasi;
