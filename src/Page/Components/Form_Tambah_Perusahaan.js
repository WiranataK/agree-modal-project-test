import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Tambah_Perusahaan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      business_name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      phone_number: ""
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
    axios.post(process.env.REACT_APP_BACKEND_URL+'/api/perusahaandetails', this.state ,{ headers: { Authorization: AuthStr } })
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
        <Modal show={this.props.show} size="lg" onHide={(e) => this.props.close()}>
            <Modal.Header closeButton onClick={(e) => this.props.close()}>
                <Modal.Title id="header">Tambah Data Perusahaan</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control placeholder="Nama Perusahaan" value={this.state.business_name} onChange={(e) => this.updateData("business_name",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nama Jalan</Form.Label>
                        <Form.Control placeholder="Nama Jalan" value={this.state.street} onChange={(e) => this.updateData("street",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Kota</Form.Label>
                        <Form.Control placeholder="Kota" value={this.state.city} onChange={(e) => this.updateData("city",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Provinsi</Form.Label>
                        <Form.Control placeholder="Provinsi" value={this.state.state} onChange={(e) => this.updateData("state",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Negara</Form.Label>
                        <Form.Control placeholder="Negara" value={this.state.country} onChange={(e) => this.updateData("country",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Kode Pos</Form.Label>
                        <Form.Control placeholder="Kode Pos" value={this.state.zip_code} onChange={(e) => this.updateData("zip_code",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>No. Telepon</Form.Label>
                        <Form.Control placeholder="No. Telepon" value={this.state.phone_number} onChange={(e) => this.updateData("phone_number",e)}/>
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
