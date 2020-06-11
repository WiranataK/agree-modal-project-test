import React from 'react';
import './css/Login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../Assets/logo.png';
import FarmerLogo from '../Assets/farmer.png';
import axios from 'axios';
import Cookies from 'universal-cookie';

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

    setUsername = event => {
      this.setState({ username: event.target.value });
    }

    setPassword = event => {
      this.setState({ password: event.target.value})
    }

    submitForm = event => {
      event.preventDefault();

      axios.post(process.env.REACT_APP_BACKEND_URL+`/token/`, {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          const cookies = new Cookies();
          const today = new Date()
          const tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate() + 1)
          cookies.set('refreshToken', res.data.refresh, { path: '/', expires: tomorrow});

          cookies.set('accessToken', res.data.access, { path: '/', maxAge: 2*60*60});
          // Example on how to get cookies
          // console.log(cookies.get('refreshToken'));
          // console.log(cookies.get('accessToken'));
        })
    }


    render(){
        return(
            <React.Fragment>
                <Container id="container">
                    <Row>
                        <Col>
                            <h1>Selamat datang di</h1>
                            <img id="logo" src={Logo}/>
                            <Form onSubmit={this.submitForm}>
                                <Form.Group>
                                    <Form.Control id="username" type="username" placeholder="Username" onChange={this.setUsername} required></Form.Control>
                                    <Form.Control id="password" type={this.state.type} placeholder="Password" onChange={this.setPassword} required></Form.Control>
                                    <icons id="showhide" onClick={this.showHide} style={{cursor:'pointer'}}>
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
