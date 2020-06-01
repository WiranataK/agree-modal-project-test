import React from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import '../css/Sidebar.css';

export const Sidebar = () => (
    <React.Fragment>
        <Nav className="col-md-12 d-none d-md-block sidebar">
            <Nav.Item className="sidebaritem">
                <Nav.Link className="item1" href="/Identification_Screen">
                    <Row id="test">
                        <Col xs="auto"><a id="rectangle"/></Col>
                        <Col>Identification Screen</Col>
                    </Row>
                </Nav.Link>
                <Nav.Link className="item2" href="/Partner_Address">
                    <Row id="test">
                        <Col xs="auto"><a id="rectangle"/></Col>
                        <Col>Partner Address</Col>
                    </Row>
                </Nav.Link>
                <Nav.Link className="item3" href="/Partner_Communication">
                    <Row id="test">
                        <Col xs="auto"><a id="rectangle"/></Col>
                        <Col>Partner Communication</Col>
                    </Row>
                </Nav.Link>
                <Nav.Link className="item4" href="/Member_Screen">
                    <Row id="test">
                        <Col xs="auto"><a id="rectangle"/></Col>
                        <Col>Member Screen</Col>
                    </Row>    
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </React.Fragment>
)