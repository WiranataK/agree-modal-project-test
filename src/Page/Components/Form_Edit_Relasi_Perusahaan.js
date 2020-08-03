import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Edit_Relasi_Perusahaan = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Edit Data Relasi Perusahaan</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <Row>
                <Col>
                    <Form.Label>Kode Relasi</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Id Induk Perusahaan</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Id Anak Perusahaan</Form.Label>
                    <Form.Control/>
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
