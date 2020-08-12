import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import { Tambah_Data } from "./Components/Tambah_Data";
import Table_Partner from "./Components/Table_Partner";
import Check_Token from "./Components/Check_Token";
import { Header } from "./Components/Header";
import { Form_Tambah } from "./Components/Form_Tambah";

function Keanggotaan() {
  return (
    <React.Fragment>
      <Check_Token />
      <Header />
      <Sidebar active="Keanggotaan" />
    </React.Fragment>
  );
}

export default Keanggotaan;
