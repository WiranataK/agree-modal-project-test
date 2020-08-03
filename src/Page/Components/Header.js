import React from "react";
import "../css/Header.css";
import { Form_Tambah } from "./Form_Tambah";
import { Tambah_Data } from "./Tambah_Data";
import {Container, Row, Col, Button} from 'react-bootstrap';

class Title extends React.Component {
  render() {
    return (
      <div>
        <div class="navigation_menu">
          <h3 class="header_title">Keanggotaan</h3>
          <a href="#" title="NavigationMenu">
            Menu / Keanggotaan / Data Partner
          </a>
        </div>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav class="menu">
        <a href="#" class="active" title="Home">
          Data Partner
        </a>
        <a href="#" title="About">
          Member
        </a>
        <a href="#" title="Gallery">
          Relasi
        </a>
      </nav>
    );
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_opened: false
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  openForm(){
    this.setState({
      form_opened: true
    });
  }
  closeForm(){
    this.setState({
      form_opened: false
    });
  }
  render() {
    let form_tambah;
    if (this.state.form_opened) {
      form_tambah = <Form_Tambah show={this.state.form_opened} close={this.closeForm} />;
    } else {
      form_tambah = null;
    }
    return (
      <React.Fragment>
        <div class="container header">
          <Row>
            <Col>
              <Title />
            </Col>
          </Row>
          <Row>
            <div class="col">
              <Nav />
            </div>
            <div class="col-auto">
              <Tambah_Data onClick={(e) => this.openForm()}/>
            </div>
          </Row>
        </div>
        {form_tambah}
      </React.Fragment>
    );
  }
}
