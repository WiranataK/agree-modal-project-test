import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Edit_Relasi_Perusahaan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      old_relation_type: this.props.old_relation_type,
      old_relation_code: this.props.old_relation_code,
      old_parent_business: this.props.old_parent_business,
      old_child_business: this.props.old_child_business,
      new_relation_type: this.props.old_relation_type,
      new_relation_code: this.props.old_relation_code,
      new_parent_business: this.props.old_parent_business,
      new_child_business: this.props.old_child_business
    };
  }
  updateData(property,event){
    this.setState({
      [property]: event.target.value
    });
  }
  submit(e){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.put(process.env.REACT_APP_BACKEND_URL+'/api/perusahaanrelationdetails', this.state ,{ headers: { Authorization: AuthStr } })
    .then((response) => {
        console.log(response);
        alert("success");
        // this.props.close();
      }, (error) => {
        console.log(error);
        alert(error)
      });
  }
  delete(e){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.delete(process.env.REACT_APP_BACKEND_URL+'/api/perusahaanrelationdetails', {
      params: {
            relation_type: this.state.old_relation_type,
            relation_code: this.state.old_relation_code,
            parent_business: this.state.old_parent_business,
            child_business: this.state.old_child_business,
          },
      headers: { Authorization: AuthStr }
    }).then((response) => {
        console.log(response);
        alert("success");
        this.props.close();
      }, (error) => {
        console.log(error);
        alert(error)
      });
  }
  render() {
    return (
        <Modal show={this.props.show} size="lg" onHide={(e) => this.props.close()}>
            <Modal.Header closeButton onClick={(e) => this.props.close()}>
                <Modal.Title id="header">Edit Data Relasi Perusahaan</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Kode Relasi</Form.Label>
                        <Form.Control placeholder="Kode Relasi" value={this.state.new_relation_code} onChange={(e) => this.updateData("new_relation_code",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Id Induk Perusahaan</Form.Label>
                        <Form.Control placeholder="Id Induk Perusahaan" value={this.state.new_parent_business} onChange={(e) => this.updateData("new_parent_business",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Id Anak Perusahaan</Form.Label>
                        <Form.Control placeholder="Id Anak Perusahaan" value={this.state.new_child_business} onChange={(e) => this.updateData("new_child_business",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="btnprimary2" onClick={(e) => this.delete()}>
                            <Col xs={"auto"}>

                            </Col>
                            <Col xs={10}>Hapus Data</Col>
                        </Button>
                    </Col>
                    <Col>
                        <Button id="btnprimary3" onClick={(e) => this.submit()}>
                            <Col xs={"auto"}>

                            </Col>
                            <Col xs={10}>Edit Data</Col>
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
  }
}
