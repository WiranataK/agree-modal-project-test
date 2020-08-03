import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Tambah_Relasi_Perusahaan = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Tambah Data Relasi Perusahaan</Modal.Title>
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
                    <Button id="btnprimary">
                        <Col xs={"auto"}>
                        </Col>
                        <Col xs={10}>Tambah Data</Col>
                    </Button>
                </Col>
            </Row>
        </Modal.Body>
    </Modal.Dialog>
)
