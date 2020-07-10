import React from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import { FaRegBuilding, FaIdBadge } from 'react-icons/fa';
import '../css/Sidebar.css';

export const Sidebar = () => (
    <React.Fragment>
        <Nav className="sidebar">
            <Nav.Item className="sidebaritem">
                <Nav.Item>
                    <Nav.Link className="sidebaritem1" href="/">
                        <Row>
                            <Col md="auto"><FaIdBadge/></Col>
                            <Col>Keanggotaan</Col>
                        </Row>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sidebaritem1" href="/">
                        <Row>
                            <Col md="auto"><FaRegBuilding/></Col>
                            <Col>Perusahaan</Col>
                        </Row>
                    </Nav.Link>                 
                </Nav.Item>
            </Nav.Item>
        </Nav>
    </React.Fragment>
)