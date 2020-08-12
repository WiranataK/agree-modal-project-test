import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Tambah_Relasi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      parent_partner: "",
      parent_type: "",
      relation_code: "",
      child_partner: "",
      child_type: "",
      partner_list: []
    };

    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievepartner', { headers: { Authorization: AuthStr } })
     .then(response => {
       var arrPartner = response.data
       var partner_list = []
       arrPartner.forEach((partner, i) => {
         var item = {}
         item["partner_code"] = partner["partner_code"]
         item["partner_name"] = partner["partner_name"]
         partner_list.push(item)
       });
       this.setState({
         partner_list:partner_list
       })
     })
     .catch((error) => {
        console.log('error ' + error);
     });
  }
  updateData(property,event){
    this.setState({
      [property]: event.target.value
    });
  }
  submit(){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.post(process.env.REACT_APP_BACKEND_URL+'/api/partnerrelationdetails', this.state ,{ headers: { Authorization: AuthStr } })
    .then((response) => {
        console.log(response);
        alert("success");
        this.props.close();
      }, (error) => {
        console.log(error);
        alert(error)
      });
  }
  render(){
    return (
      <Modal size="lg" show={this.props.show} onHide={(e) => this.props.close()}>
          <Modal.Header closeButton onClick={(e) => this.props.close()}>
              <Modal.Title id="header">Tambah Data Relasi</Modal.Title>
          </Modal.Header>
          <Modal.Body id="body">
              <Row>
                  <Col>
                      <Form.Label>Parent Partner</Form.Label>
                      <Form.Control as="select" value={this.state.parent_partner} onChange={(e) => this.updateData("parent_partner",e)}>
                          <option value="" hidden>Pilih Parent Partner</option>
                          {this.state.partner_list.map((item, index) => (
                          <option value={item["partner_code"]}>{item["partner_code"]+" ("+item["partner_name"]+")"}</option>
                          ))}
                      </Form.Control>
                  </Col>
                  <Col>
                      <Form.Label>Child Partner</Form.Label>
                      <Form.Control as="select" value={this.state.child_partner} onChange={(e) => this.updateData("child_partner",e)}>
                          <option value="" hidden>Pilih Child Partner</option>
                          {this.state.partner_list.map((item, index) => (
                          <option value={item["partner_code"]}>{item["partner_code"]+" ("+item["partner_name"]+")"}</option>
                          ))}
                      </Form.Control>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Form.Label>Parent Type</Form.Label>
                      <Form.Control  id="fixing2" placeholder="Parent Type" value={this.state.parent_type} onChange={(e) => this.updateData("parent_type",e)}></Form.Control>
                  </Col>
                  <Col>
                      <Form.Label>Child Type</Form.Label>
                      <Form.Control  id="fixing2" placeholder="Parent Type" value={this.state.child_type} onChange={(e) => this.updateData("child_type",e)}></Form.Control>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Form.Label>Tipe Relasi</Form.Label>
                      <Form.Control as="select" value={this.state.relation_code} onChange={(e) => this.updateData("relation_code",e)}>
                          <option value="" disabled hidden>Pilih Tipe Relasi</option>
                          <option value="101">One To One</option>
                          <option value="102">One To Many</option>
                          <option value="201">Many To One</option>
                          <option value="202">Many To Many</option>
                      </Form.Control>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Button id="btnprimary" onClick={(e) => this.submit()}>
                          <Col xs={"auto"}>
                          </Col>
                          <Col xs={10}>Tambah Data</Col>
                      </Button>
                  </Col>
              </Row>
          </Modal.Body>
      </Modal>
    )
  }
}
