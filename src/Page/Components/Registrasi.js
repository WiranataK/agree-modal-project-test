import React from 'react';
import '../css/Registrasi.css';
import { Container, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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
            disabled: this.state.disabled === true ? false : true
        })
    }

    render(){
        return(
            <React.Fragment>
                <Container id="container">
                    <h1 id="headert1">Pilih Jenis Member Agree</h1>
                        <Container id="container2">
                            <ToggleButtonGroup name="radio" type="radio" id="buttongroup" vertical>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>Individu</ToggleButton>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>Individu Berusaha</ToggleButton>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>Perusahaan / UKM</ToggleButton>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>Offtaker</ToggleButton>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>FA Offtaker</ToggleButton>
                                <ToggleButton id="option" variant="outline-primary" onFocus={this.disabledButton}>FA Lembaga Keuangan</ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup type="checkbox" className="mb-2">
                                <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                                <ToggleButton value={2}>Checkbox 2</ToggleButton>
                                <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                            </ToggleButtonGroup>
                        </Container>
                    <Button id="button" variant="primary" disabled={this.state.disabled}>Selanjutnya</Button>
                </Container>
            </React.Fragment>
        );
    }
}