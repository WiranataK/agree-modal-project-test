import React from 'react';
import './css/Login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../Assets/logo.png';
import FarmerLogo from '../Assets/farmer.png';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'password',
        }
        this.showHide = this.showHide.bind(this);
    }

    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'password' ? 'text' : 'password'
        })  
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <h1>Selamat datang di</h1>
                            <img id="logo" src={Logo}/>
                            <Form>
                                <Form.Group>
                                    <Form.Control id="username" type="username" placeholder="Username" required></Form.Control>
                                    <Form.Control id="password" type={this.state.type} placeholder="Password" required></Form.Control>
                                    <icons id="showhide" onClick={this.showHide}>
                                        {this.state.type === 'password' ? <FaEyeSlash/> : <FaEye/>}
                                    </icons>
                                    <Button id="buttonmasuk" variant="primary" type="submit">Masuk</Button>
                                </Form.Group>
                            </Form>
                            <h2>Belum punya akun?</h2>
                            <Button id="buttonregister" variant="link">Daftar di sini</Button>
                        </Col>
                        <Col>
                            <img id="farmerlogo" src={ FarmerLogo }/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}