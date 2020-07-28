import React from 'react';
import '../css/Form_Tambah.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export const Form_Tambah = () => (
    <Modal.Dialog size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Tambah Data Keanggotaan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <Form.Label>Perusahaan</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Perusahaan">
                        <option>Pilih Perusahaan</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
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
                    <Form.Control placeholder="Tempat Lahir"/>
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
                        </Col>
                        <Col>
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
                <Col>Tipe Partner</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Tipe Partner 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Partner</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Partner">
                        <option>Pilih Jenis Partner</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Tipe Partner 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Jenis Partner</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Partner">
                        <option>Pilih Jenis Partner</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
                </Col>
            </Row>
            <Row>
                <Col>Data Alamat</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Alamat 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
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
                    <Form.Control placeholder="No. Alamat"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Nama Jalan"></Form.Control>
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
                    <Form.Label>Alamat 2</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
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
                    <Form.Control placeholder="No. Alamat"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Nama Jalan"></Form.Control>
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
                <Col>Data Komunikasi</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Komunikasi 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
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
                    <Form.Control placeholder="No. Komunikasi"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Identitas Komunikasi"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
                </Col>
            </Row>
            <Row>
                <Col>Data Identitas</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Identitas 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
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
                    <Form.Control placeholder="No. Identitas"></Form.Control>
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
                    <Form.Control placeholder="Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Negara Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Identitas 1</Form.Label>
                </Col>
                <Col>
                    <Button variant="link">Hapus</Button>
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
                    <Form.Control placeholder="No. Identitas"></Form.Control>
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
                    <Form.Control placeholder="Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Negara Tempat Identitas Dikeluarkan"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Tambah Data</Button>
                </Col>
            </Row>
            <Row>
                <Col>Data Bank</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Nama Akun"></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Jenis Pembayaran</Form.Label>
                    <Form.Control as="select" placeholder="Pilih Jenis Pembayaran">
                        <option>Pilih Jenis Pembayaran</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="Kode Bank"></Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="No. Akun"></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        <Col>
                        
                        </Col>
                        <Col>Tambah Data</Col>
                    </Button>
                </Col>
            </Row>
        </Modal.Body>
    </Modal.Dialog>
)
