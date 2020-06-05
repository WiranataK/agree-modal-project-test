import React from 'react';
import '../css/RegistrasiTahap1.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

export default class Registrasi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: true,
        }
        this.disabledButton = this.disabledButton.bind(this);
    }

    disabledButton(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            disabled: this.state.disabled === true ? false : false
        })
    }

    render(){
        return(
            <React.Fragment>
                <Container id="container">
                    <h1 id="headert1">Pilih Jenis Member Agree</h1>
                        <Container id="container2">
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>Individu</Button>{' '}
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>Individu Berusaha</Button>{' '}
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>Perusahaan / UKM</Button>{' '}
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>Offtaker</Button>{' '}
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>FA Offtaker</Button>{' '}
                            <Button id="option" name="option" variant="outline-primary" onFocus={this.disabledButton}>FA Lembaga Keuangan</Button>{' '}
                        </Container>
                    <Button id="button" variant="primary" disabled={this.state.disabled}>
                        <Row>
                            <Col>Selanjutnya</Col>
                            <Col>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.46856 5.65548L0.305275 0.841617C0.28917 0.828938 0.269815 0.821058 0.249434 0.818883C0.229053 0.816708 0.208471 0.820326 0.190053 0.82932C0.171635 0.838315 0.156128 0.852322 0.145312 0.869733C0.134496 0.887144 0.12881 0.907253 0.128907 0.92775V1.98459C0.128907 2.05158 0.160353 2.11584 0.212306 2.15685L5.13418 6.00001L0.212306 9.84318C0.158986 9.88419 0.128907 9.94845 0.128907 10.0154V11.0723C0.128907 11.1639 0.234181 11.2145 0.305275 11.1584L6.46856 6.34455C6.52094 6.30368 6.56332 6.25142 6.59246 6.19171C6.62161 6.13201 6.63676 6.06645 6.63676 6.00001C6.63676 5.93358 6.62161 5.86802 6.59246 5.80832C6.56332 5.74861 6.52094 5.69635 6.46856 5.65548Z" fill="white"/>
                                </svg>
                            </Col>
                        </Row>
                    </Button>
                </Container>
            </React.Fragment>
        );
    }
}