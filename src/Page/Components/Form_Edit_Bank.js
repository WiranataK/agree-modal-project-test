import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Edit_Bank extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bank_group: "",
      bank_code: this.props.bankCode,
      bank_name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zip_code: ""
    };

    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/bankdetails?bank_code='+this.state.bank_code, { headers: { Authorization: AuthStr } })
    .then(response => {
      // If request is good...
      var data = response.data;
      this.setState({
        bank_group: data["bank_group"],
        bank_name: data["bank_name"],
        street: data["street"],
        city: data["city"],
        state: data["state"],
        country: data["country"],
        zip_code: data["zip_code"]
      });
    })
    .catch((error) => {
      alert("error :can't get Bank data");
      this.props.close()
    });
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
    axios.put(process.env.REACT_APP_BACKEND_URL+'/api/bankdetails', this.state ,{ headers: { Authorization: AuthStr } })
    .then((response) => {
        console.log(response);
        alert("success");
        this.props.close();
      }, (error) => {
        console.log(error);
        alert(error)
      });
  }
  delete(e){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.delete(process.env.REACT_APP_BACKEND_URL+'/api/bankdetails?partner_code='+this.state.partner_code, { headers: { Authorization: AuthStr } })
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
                <Modal.Title id="header">Edit Data Bank</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Kode Grup Bank</Form.Label>
                        <Form.Control placeholder="Kode Grup Bank" value={this.state.bank_group} onChange={(e) => this.updateData("bank_group",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Kode Bank</Form.Label>
                        <Form.Control placeholder="Kode Bank" value={this.state.bank_code} onChange={(e) => this.updateData("bank_code",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Nama Bank</Form.Label>
                        <Form.Control placeholder="Nama Bank" value={this.state.bank_name} onChange={(e) => this.updateData("bank_name",e)}/>
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
