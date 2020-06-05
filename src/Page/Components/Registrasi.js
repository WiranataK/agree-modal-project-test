import React from 'react';
import '../css/Registrasi.css';
import { Container, Button } from 'react-bootstrap';

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
                    <Button id="button" variant="primary" disabled={this.state.disabled}>Selanjutnya</Button>
                </Container>
            </React.Fragment>
        );
    }
}