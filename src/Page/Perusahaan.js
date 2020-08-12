import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import { Tambah_Data } from "./Components/Tambah_Data";
import Table_Partner from "./Components/Table_Partner";
import Check_Token from "./Components/Check_Token";
import { Header_Perusahaan } from "./Components/Header_Perusahaan";
import { Form_Tambah } from "./Components/Form_Tambah";
import { Table_Perusahaan } from "./Components/Table_Perusahaan";

function Perusahaan() {
  return (
    <React.Fragment>
      <Check_Token />
      <Header_Perusahaan />
      <Sidebar active="Perusahaan"/>
    </React.Fragment>
  );
}

export default Perusahaan;
