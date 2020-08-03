import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/Tambah_Data.css';

export class Tambah_Data extends React.Component{
  render(){
    return (
        <React.Fragment className="back">
            <Button id="buttonadddata" onClick={this.props.onClick} variant="primary">Tambah Data</Button>
        </React.Fragment>
    )
  }
}
