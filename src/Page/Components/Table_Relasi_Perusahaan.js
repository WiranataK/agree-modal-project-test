import React from 'react';
import { Table, Row } from 'react-bootstrap';
import sanitize from '../helper/sanitizer.js'
import '../css/Table_CSS.css';
import { Form_Edit_Relasi_Perusahaan } from "./Form_Edit_Relasi_Perusahaan";

export class Table_Relasi_Perusahaan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrRelPerusahaan: []
    };
    this.initData()
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async initData(){
      // let cookies = new Cookies();
      // let token = cookies.get('accessToken');
      // const AuthStr = 'Bearer '.concat(token);
      // axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievepartner', { headers: { Authorization: AuthStr } })
      //  .then(response => {
      //    var arrRelPerusahaan = response.data
      //    arrRelPerusahaan.forEach((partner, i) => {
      //      var types = ""
      //      partner["partner_type"].forEach((type, j) => {
      //          if(j>0){
      //            types +=","
      //          }
      //          types += sanitize(type)
      //      });
      //      partner["partner_type"] = types
      //    });
      //
      //    this.setState({
      //      arrRelPerusahaan:arrRelPerusahaan
      //    });
      //  })
      //  .catch((error) => {
      //     console.log('error ' + error);
      //  });
      //
      await this.sleep(1000);
      this.setState({
       arrRelPerusahaan:[
         {
           relation_type:"relation_type",
           relation_code:"relation_code",
           parent_name:"parent_name",
           parent_partner_code:"parent_partner_code",
           child_name:"child_name",
           child_partner_code:"child_partner_code"
         },
         {
           relation_type:"relation_type",
           relation_code:"relation_code",
           parent_name:"parent_name",
           parent_partner_code:"parent_partner_code",
           child_name:"child_name",
           child_partner_code:"child_partner_code"
         },
         {
           relation_type:"relation_type",
           relation_code:"relation_code",
           parent_name:"parent_name",
           parent_partner_code:"parent_partner_code",
           child_name:"child_name",
           child_partner_code:"child_partner_code"
         },
         {
           relation_type:"relation_type",
           relation_code:"relation_code",
           parent_name:"parent_name",
           parent_partner_code:"parent_partner_code",
           child_name:"child_name",
           child_partner_code:"child_partner_code"
         },
       ]
      });
    }
    render(){
      return (
          <React.Fragment>
              <Row className="containers">
                  <Row>
                      <h1>Daftar Relasi Perusahaan</h1>
                  </Row>
                  <Row>
                      <Table className="table" responsive striped hover variant="light" id="tablePartner">
                          <thead className="head">
                              <tr>
                                  <th>No</th>
                                  <th>Kode Relasi</th>
                                  <th>Induk Perusahaan</th>
                                  <th>Id Induk Perusahaan</th>
                                  <th>Anak Perusahaan</th>
                                  <th>Id Anak Perusahaan</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody className="body">
                          {this.state.arrRelPerusahaan.map((item, index) => (
                              <tr>
                                  <td>{index+1}</td>
                                  <td>{sanitize(item["relation_code"])}</td>
                                  <td>{sanitize(item["parent_name"])}</td>
                                  <td>{sanitize(item["parent_partner_code"])}</td>
                                  <td>{sanitize(item["child_name"])}</td>
                                  <td>{sanitize(item["child_partner_code"])}</td>
                                  <td><Edit_Button old_relation_type={sanitize(item["relation_type"])} old_relation_code={sanitize(item["relation_code"])} old_parent_business={sanitize(item["parent_partner_code"])} old_child_business={sanitize(item["child_partner_code"])}/></td>
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
      form_edit = <Form_Edit_Relasi_Perusahaan show={this.state.form_opened} close={this.closeForm} old_relation_type={this.props.old_relation_type} old_relation_code={this.props.old_relation_code} old_parent_business={this.props.old_parent_business} old_child_business={this.props.old_child_business} />;
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
