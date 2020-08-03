import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Tambah_Relasi = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Edit Data Relasi</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <Row>
                <Col>
                    <Form.Label>Parent Partner</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Parent Partner">
                        <option>Pilih Parent Partner</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Child Partner</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Child Partnern">
                        <option>Pilih Child Partner</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Tipe Relasi</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Tipe Relasi">
                        <option>Pilih Tipe Relasi</option>
                        <option>...</option>
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
    </Modal.Dialog>
)
