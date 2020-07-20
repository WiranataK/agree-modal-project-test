import React from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import '../css/Table_CSS.css';
import { FaPen } from 'react-icons/fa';

export const Table_Relasi = () => (
    <React.Fragment>
        <Row className="containersrelasi">
            <Row>
                <h1>Relasi Partner</h1>
            </Row>
            <Row>
                <Table className="table" responsive striped hover variant="light" id="tablePartner">
                    <thead className="head">
                        <tr>
                            <th>No</th>
                            <th>Parent</th>
                            <th>Jenis Relasi</th>
                            <th>Type Child</th>
                            <th>Child</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody className="body">
                    </tbody>
                </Table>
            </Row>
        </Row>
    </React.Fragment>
)
