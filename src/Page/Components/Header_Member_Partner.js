import React from "react";
import "../css/Header.css";
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Form_Tambah_Member } from "./Form_Tambah_Member";
import { Tambah_Data } from "./Tambah_Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import Table_Member_Partner from "./Table_Member_Partner";
import sanitize from '../helper/sanitizer.js'

class Title extends React.Component {
  render() {
    return (
      <div>
        <div class="navigation_menu">
          <h3 class="header_title">Member Partner</h3>
          <a href="#" title="NavigationMenu">
            Menu / Keanggotaan / Data Partner / Member
          </a>
        </div>
      </div>
    );
  }
}

class Header_Member_Partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_opened: false,
      activeTab: "",
      partner_name:"",
      partner_code:"",
      partner_type:""
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);

    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievememberpartner?partner_code='+this.props.match.params.partner_code, { headers: { Authorization: AuthStr } })
     .then(response => {
        var data = response.data;
        var types = ""
        console.log(data["partner_type"])
        data["partner_type"].forEach((type, j) => {
            if(j>0){
              types +=","
            }
            types += sanitize(type)
        });
        this.setState({
          partner_code:sanitize(data["partner_code"]),
          partner_name:sanitize(data["partner_name"]),
          partner_type:types
        });
     })
     .catch((error) => {
        console.log('error ' + error);
     });
  }
  openForm() {
    this.setState({
      form_opened: true,
    });
  }
  closeForm() {
    this.setState({
      form_opened: false,
    });
  }
  changeActiveTab(activeTab) {
    this.setState({
      activeTab: activeTab,
    });
  }
  render() {
    var form_tambah = null;
    if (this.state.form_opened) {
      form_tambah = <Form_Tambah_Member show={this.state.form_opened} close={this.closeForm} />;
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
              <div className="tabs">
                <ol className="tab-list">
                  <li className="tab-list-item">
                    <Row className="form-label" style={{margin: "0"}}>
                    Nama Partner
                    </Row>
                    <Row style={{margin: "0"}}>
                    {this.state.partner_name}
                    </Row>
                  </li>
                  <li className="tab-list-item">
                    <Row className="form-label" style={{margin: "0"}}>
                    Jenis Partner
                    </Row>
                    <Row style={{margin: "0"}}>
                    {this.state.partner_type}
                    </Row>
                  </li>
                  <li className="tab-list-item">
                    <Row className="form-label" style={{margin: "0"}}>
                    No. Partner
                    </Row>
                    <Row style={{margin: "0"}}>
                    {this.state.partner_code}
                    </Row>
                  </li>
                </ol>
                <div className="tab-content">
                  <Table_Member_Partner/>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <Tambah_Data onClick={(e) => this.openForm()} />
            </div>
          </Row>
        </div>
        {form_tambah}
      </React.Fragment>
    );
  }
}

export default withRouter(Header_Member_Partner);
