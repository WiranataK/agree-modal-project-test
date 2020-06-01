import React from 'react';
import '../css/Registrasi.css';
import { Container, Button } from 'react-bootstrap';

export default class Registrasi extends React.Component{


    render(){
        return(
            <React.Fragment>
                <Container id="container">
                    <h1 id="headert1">Pilih Jenis Member Agree</h1>
                        <Container id="container2">
                            <Button id="option" variant="outline-primary">Individu</Button>{' '}
                            <Button id="option" variant="outline-primary">Individu Berusaha</Button>{' '}
                            <Button id="option" variant="outline-primary">Perusahaan / UKM</Button>{' '}
                            <Button id="option" variant="outline-primary">Offtaker</Button>{' '}
                            <Button id="option" variant="outline-primary">FA Offtaker</Button>{' '}
                            <Button id="option" variant="outline-primary">FA Lembaga Keuangan</Button>{' '}
                        </Container>
                    <Button id="button" variant="primary">Selanjutnya</Button>
                </Container>
            </React.Fragment>
        );
    }
}