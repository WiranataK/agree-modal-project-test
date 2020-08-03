import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Tambah_Perusahaan = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Tambah Data Perusahaan</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <Row>
                <Col>
                    <Form.Label>Kode Bisnis</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Nama Perusahaan</Form.Label>
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
                <Col>
                    <Form.Label>No. Telepon</Form.Label>
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
