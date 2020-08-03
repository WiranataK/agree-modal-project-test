import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Edit_Bank = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Edit Data Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <Row>
                <Col>
                    <Form.Label>Perusahaan</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Perusahaan">
                        <option>Pilih Perusahaan</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Kode Grup Bank</Form.Label>
                    <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Kode Bank</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Nama Bank</Form.Label>
                    <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Nama Jalan</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Kota</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Negara</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Kode Pos</Form.Label>
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
