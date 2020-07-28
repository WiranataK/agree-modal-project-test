import React from 'react';
import { Table, Row } from 'react-bootstrap';
import '../css/Table_CSS.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import sanitize from '../helper/sanitizer.js'

var arrMember = [];

function fillTable(){
    var table = document.getElementById("tablePartner").getElementsByTagName('tbody')[0];

    arrMember.forEach((member, i) => {

        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = i+1;
        row.insertCell(1).innerHTML = sanitize(member["member_type"]);
        row.insertCell(2).innerHTML = sanitize(member["member_number"]);
        row.insertCell(3).innerHTML = sanitize(member["member_name"]);
        row.insertCell(4).innerHTML = sanitize(member["member_nickname"]);
        row.insertCell(5).innerHTML = sanitize(member["birthplace"]);
        row.insertCell(6).innerHTML = sanitize(member["date_of_birth"]);
        row.insertCell(7).innerHTML = sanitize(member["gender"]);
        row.insertCell(8).innerHTML = sanitize(member["religion"]);
        row.insertCell(9).innerHTML = sanitize(member["language"]);
        row.insertCell(10).innerHTML = sanitize(member["nationality"]);
        row.insertCell(11).innerHTML = '<button type="button" class="buttons2 btn btn-primary" value = "'+sanitize(member["member_number"])+'"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85642 2.54902L7.42932 1.11677C7.24307 0.941184 6.999 0.840437 6.74355 0.83369C6.4881 0.826944 6.23909 0.914669 6.04389 1.08018L1.35634 5.78466C1.18799 5.95504 1.08316 6.17837 1.05946 6.41715L0.835502 8.59689C0.828486 8.67345 0.838385 8.75062 0.864493 8.82291C0.890601 8.89519 0.932275 8.9608 0.986545 9.01506C1.03521 9.06351 1.09293 9.10184 1.15639 9.12785C1.21985 9.15387 1.2878 9.16705 1.35634 9.16665H1.40322L3.57512 8.96802C3.81303 8.94423 4.03556 8.83903 4.20533 8.67007L8.89288 3.96559C9.07482 3.77269 9.17315 3.51527 9.16631 3.24974C9.15948 2.98422 9.04804 2.73224 8.85642 2.54902ZM7.08557 4.2949L5.68972 2.89402L6.70536 1.84858L8.12725 3.2756L7.08557 4.2949Z" fill="white"></path></svg></button>';
    });
}

function iniData(){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievemember', { headers: { Authorization: AuthStr } })
     .then(response => {
        // If request is good...
       arrMember = response.data;
       console.log(arrMember);
       fillTable();
     })
     .catch((error) => {
        console.log('error ' + error);
     });
  };

export const Table_Member = () => (
    <React.Fragment>
        <Row className="containers">
            <Row>
                <h1>Daftar Partner</h1>
            </Row>
            <Row>
                <Table className="table" responsive striped hover variant="light" id="tablePartner" onChange={iniData()}>
                    <thead className="head">
                        <tr>
                            <th>No</th>
                            <th>Jenis Member</th>
                            <th>Nomor Member</th>
                            <th>Nama</th>
                            <th>Nama Panggilan</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Jenis Kelamin</th>
                            <th>Agama</th>
                            <th>Bahasa</th>
                            <th>Kewarganegaraan</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody className="body">
                    </tbody>
                </Table>
            </Row>
        </Row>
    </React.Fragment>
)
