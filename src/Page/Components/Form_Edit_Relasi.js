import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Edit_Relasi extends React.Component{
  constructor(props) {
    super(props);
    this.old_parent_partner = this.props.old_parent_partner;
    this.old_parent_type = this.props.old_parent_type;
    this.old_relation_code = this.props.old_relation_code;
    this.old_relation_type = this.props.old_relation_type;
    this.old_child_partner = this.props.old_child_partner;
    this.old_child_type = this.props.old_child_type;
    this.state = {
      new_parent_partner: "",
      new_parent_type: "",
      new_relation_code: "",
      new_relation_type: "",
      new_child_partner: "",
      new_child_type: ""
    };
  }
  updateData(property,event){
    this.setState({
      [property]: event.target.value
    });
  }
  render(){
    return (
        <Modal size="lg" show={this.props.show} onHide={(e) => this.props.close()}>
            <Modal.Header closeButton onClick={(e) => this.props.close()}>
                <Modal.Title id="header">Edit Data Relasi</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Parent Partner</Form.Label>
                        <Form.Control as="select" value={this.state.new_parent_partner} onChange={(e) => this.updateData("new_parent_partner",e)}>
                            <option value="" disabled hidden>Pilih Parent Partner</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Child Partner</Form.Label>
                        <Form.Control as="select" value={this.state.new_child_partner} onChange={(e) => this.updateData("new_child_partner",e)}>
                            <option value="" disabled hidden>Pilih Child Partner</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Tipe Relasi</Form.Label>
                        <Form.Control as="select" value={this.state.new_relation_type} onChange={(e) => this.updateData("new_relation_type",e)}>
                            <option value="" disabled hidden>Pilih Tipe Relasi</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="btnprimary2">
                            <Col xs={"auto"}>

                            </Col>
                            <Col xs={10}>Hapus Data</Col>
                        </Button>
                    </Col>
                    <Col>
                        <Button id="btnprimary3">
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
