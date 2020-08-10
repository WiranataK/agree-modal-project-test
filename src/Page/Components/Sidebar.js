import React from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import { FaRegBuilding, FaIdBadge } from 'react-icons/fa';
import '../css/Sidebar.css';

export class Sidebar extends React.Component{
  render() {
    return (
        <React.Fragment>
            <div className="sidebar" >
                <Nav className="sidebaritem" defaultActiveKey={"/"+this.props.active}>
                    <Nav.Item>
                        <Nav.Link className="sidebaritem1" href="/Keanggotaan">
                            <Row>
                                <Col md="auto"><FaIdBadge/></Col>
                                <Col>Keanggotaan</Col>
                            </Row>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="sidebaritem1" href="/Perusahaan">
                            <Row>
                                <Col md="auto"><FaRegBuilding/></Col>
                                <Col>Perusahaan</Col>
                            </Row>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </React.Fragment>
    )
  }
}
