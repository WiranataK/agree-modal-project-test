import React from 'react';
import { Table, Row } from 'react-bootstrap';
import '../css/Table_CSS.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import sanitize from '../helper/sanitizer.js'
import { Form_Edit_Relasi } from "./Form_Edit_Relasi";


export class Table_Relasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrRelasi: []
    };
    this.initData();
  }

  fillTable(){
    var table = document.getElementById("tableRelasi").getElementsByTagName('tbody')[0];

    this.arrRelasi.forEach((relasi, i) => {

      var row = table.insertRow(i);
      row.insertCell(0).innerHTML = i+1;
      row.insertCell(1).innerHTML = sanitize(relasi["parent_partner"]);
      row.insertCell(2).innerHTML = sanitize(relasi["relation_type"]);
      row.insertCell(3).innerHTML = sanitize(relasi["child_type"]);
      row.insertCell(4).innerHTML = sanitize(relasi["child_partner"]);
      row.insertCell(5).innerHTML = '<button type="button" class="buttons2 btn btn-primary" value = "'+sanitize(relasi["parent_partner"])+'"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85642 2.54902L7.42932 1.11677C7.24307 0.941184 6.999 0.840437 6.74355 0.83369C6.4881 0.826944 6.23909 0.914669 6.04389 1.08018L1.35634 5.78466C1.18799 5.95504 1.08316 6.17837 1.05946 6.41715L0.835502 8.59689C0.828486 8.67345 0.838385 8.75062 0.864493 8.82291C0.890601 8.89519 0.932275 8.9608 0.986545 9.01506C1.03521 9.06351 1.09293 9.10184 1.15639 9.12785C1.21985 9.15387 1.2878 9.16705 1.35634 9.16665H1.40322L3.57512 8.96802C3.81303 8.94423 4.03556 8.83903 4.20533 8.67007L8.89288 3.96559C9.07482 3.77269 9.17315 3.51527 9.16631 3.24974C9.15948 2.98422 9.04804 2.73224 8.85642 2.54902ZM7.08557 4.2949L5.68972 2.89402L6.70536 1.84858L8.12725 3.2756L7.08557 4.2949Z" fill="white"></path></svg></button>';
    });
  }

  initData(){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievepartnerrelation', { headers: { Authorization: AuthStr } })
     .then(response => {
        // If request is good...
       var arrRelasi = response.data;
       this.setState({
         arrRelasi:arrRelasi
       });
     })
     .catch((error) => {
        console.log('error ' + error);
     });
  }

  render(){
    return (
        <React.Fragment>
            <Row className="containersrelasi">
                <Row>
                    <h1>Relasi Partner</h1>
                </Row>
                <Row>
                    <Table className="table" responsive striped hover variant="light" id="tableRelasi">
                        <thead className="head">
                            <tr>
                                <th>No</th>
                                <th>Parent</th>
                                <th>Jenis Relasi</th>
                                <th>Type Child</th>
                                <th>Child</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="body">
                        {this.state.arrRelasi.map((item, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{sanitize(item["parent_partner"])}</td>
                                <td>{sanitize(item["relation_type"])}</td>
                                <td>{sanitize(item["child_type"])}</td>
                                <td>{sanitize(item["child_partner"])}</td>
                                <td><Edit_Button parent_partner={item["parent_partner"]} parent_type={item["parent_type"]} relation_code={item["relation_code"]} relation_type={item["relation_type"]} child_partner={item["child_partner"]} child_type={item["child_type"]}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </Row>
        </React.Fragment>
    )
  }
}

class Edit_Button extends React.Component {
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
  render(){
    let form_edit;
    if (this.state.form_opened) {
      form_edit = <Form_Edit_Relasi show={this.state.form_opened} close={this.closeForm} old_parent_partner={this.props.parent_partner} old_parent_type={this.props.parent_type} old_relation_code={this.props.relation_code} old_relation_type={this.props.relation_type} old_child_partner={this.props.child_partner} old_child_type={this.props.child_type} />;
    } else {
      form_edit = null;
    }
    return (
      <div>
        <button type="button" class="buttons2 btn btn-primary" onClick={(e) => this.openForm()}><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85642 2.54902L7.42932 1.11677C7.24307 0.941184 6.999 0.840437 6.74355 0.83369C6.4881 0.826944 6.23909 0.914669 6.04389 1.08018L1.35634 5.78466C1.18799 5.95504 1.08316 6.17837 1.05946 6.41715L0.835502 8.59689C0.828486 8.67345 0.838385 8.75062 0.864493 8.82291C0.890601 8.89519 0.932275 8.9608 0.986545 9.01506C1.03521 9.06351 1.09293 9.10184 1.15639 9.12785C1.21985 9.15387 1.2878 9.16705 1.35634 9.16665H1.40322L3.57512 8.96802C3.81303 8.94423 4.03556 8.83903 4.20533 8.67007L8.89288 3.96559C9.07482 3.77269 9.17315 3.51527 9.16631 3.24974C9.15948 2.98422 9.04804 2.73224 8.85642 2.54902ZM7.08557 4.2949L5.68972 2.89402L6.70536 1.84858L8.12725 3.2756L7.08557 4.2949Z" fill="white"></path></svg></button>
        {form_edit}
      </div>
    )
  }
}
