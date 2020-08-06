import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Tambah_Relasi_Perusahaan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      relation_type: "",
      relation_code: "",
      parent_business: "",
      child_business: ""
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
    axios.post(process.env.REACT_APP_BACKEND_URL+'/api/companydetails', this.state ,{ headers: { Authorization: AuthStr } })
    .then((response) => {
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
                <Modal.Title id="header">Tambah Data Relasi Perusahaan</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Kode Relasi</Form.Label>
                        <Form.Control placeholder="Kode Relasi" value={this.state.relation_code} onChange={(e) => this.updateData("relation_code",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Id Induk Perusahaan</Form.Label>
                        <Form.Control placeholder="Id Induk Perusahaan" value={this.state.parent_business} onChange={(e) => this.updateData("parent_business",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Id Anak Perusahaan</Form.Label>
                        <Form.Control placeholder="Id Anak Perusahaan" value={this.state.child_business} onChange={(e) => this.updateData("child_business",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="btnprimary" onClick={(e) => this.submit(e)}>
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
