import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Tambah_Member = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title id="header">Tambah Data Member Partner</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
            <Row>
                <Col>
                    <Form.Label>Nama Partner</Form.Label>
                    <Form.Control/>
                </Col>
                <Col>
                    <Form.Label>Jenis Partner</Form.Label>
                    <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>No. Partner</Form.Label>
                    <Form.Control/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Keanggotaan</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Keanggotaan">
                        <option>Pilih Jenis Keanggotaan</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Nama"/>
                </Col>
                <Col>
                    <Form.Control placeholder="Nama Panggilan"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control id="fixing" placeholder="Tempat Lahir"/>
                </Col>
                <Col>
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control type="date"/>
                </Col>
                <Col>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check type="radio" label="Laki-Laki"/>
                            <Form.Check type="radio" label="Perempuan"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Agama"/>
                </Col>
                <Col>
                    <Form.Control placeholder="Bahasa"/>
                </Col>
                <Col>
                    <Form.Control placeholder="Kebangsaan"/>
                </Col>
            </Row>
            <Row>
                <Col id="col1">Data Alamat</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label id="fl">Alamat 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">
                        <Row>
                            <Col>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                </svg>
                            </Col>
                            <Col>Hapus</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Alamat</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Alamat">
                        <option>Pilih Jenis Alamat</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="No. Alamat"></Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Nama Jalan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Kota"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Provinsi"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Negara"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Kode Pos"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label id="fl">Alamat 2</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">
                        <Row>
                            <Col>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                </svg>
                            </Col>
                            <Col>Hapus</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Alamat</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Alamat">
                        <option>Pilih Jenis Alamat</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="No. Alamat"></Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Nama Jalan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Kota"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Provinsi"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Negara"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Kode Pos"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
                </Col>
            </Row>
            <Row>
                <Col id="col1">Data Komunikasi</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label id="fl">Komunikasi 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">
                        <Row>
                            <Col>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                </svg>
                            </Col>
                            <Col>Hapus</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Komunikasi</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Komunikasi">
                        <option>Pilih Jenis Komunikasi</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="No. Komunikasi"></Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Identitas Komunikasi"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
                </Col>
            </Row>
            <Row>
                <Col id="col1">Data Identitas</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label id="fl">Identitas 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">
                        <Row>
                            <Col>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                </svg>
                            </Col>
                            <Col>Hapus</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Identitas</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Identitas">
                        <option>Pilih Jenis Identitas</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="No. Identitas"></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Tanggal Dikeluarkan</Form.Label>
                    <Form.Control type="date"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Tanggal Kadaluarsa</Form.Label>
                    <Form.Control type="date"/>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Negara Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label id="fl">Identitas 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">
                        <Row>
                            <Col>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                </svg>
                            </Col>
                            <Col>Hapus</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Identitas</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Identitas">
                        <option>Pilih Jenis Identitas</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="No. Identitas"></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Tanggal Dikeluarkan</Form.Label>
                    <Form.Control type="date"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Tanggal Kadaluarsa</Form.Label>
                    <Form.Control type="date"/>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
                <Col>
                    <Form.Control id="fixing" placeholder="Negara Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
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
