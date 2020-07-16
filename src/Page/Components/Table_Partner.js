import React from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import '../css/Table_CSS.css';
import { FaUserFriends, FaPen } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import sanitize from '../helper/sanitizer.js'

var arrPartner = [];

function fillTable(){
    var table = document.getElementById("tablePartner").getElementsByTagName('tbody')[0];

    arrPartner.forEach((partner, i) => {

        var row = table.insertRow(i);

        var types = ""
        partner["partner_type"].forEach((type, j) => {
            if(j>0){
              types +=","
            }
            types += sanitize(type)
        });

        row.insertCell(0).innerHTML = i+1;
        row.insertCell(1).innerHTML = types;
        row.insertCell(2).innerHTML = sanitize(partner["partner_code"]);
        row.insertCell(3).innerHTML = sanitize(partner["partner_name"]);
        row.insertCell(4).innerHTML = sanitize(partner["nickname"]);
        row.insertCell(5).innerHTML = sanitize(partner["birthplace"]);
        row.insertCell(6).innerHTML = sanitize(partner["date_of_birth"]);
        row.insertCell(7).innerHTML = sanitize(partner["gender"]);
        row.insertCell(8).innerHTML = sanitize(partner["religion"]);
        row.insertCell(9).innerHTML = sanitize(partner["language"]);
        row.insertCell(10).innerHTML = sanitize(partner["nationality"]);
        row.insertCell(11).innerHTML = '<button type="button" class="buttons1 btn btn-primary" value = "'+sanitize(partner["partner_code"])+'"><svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10.5C9.47067 10.5 10.6667 9.26663 10.6667 7.75C10.6667 6.23337 9.47067 5 8 5C6.52933 5 5.33333 6.23337 5.33333 7.75C5.33333 9.26663 6.52933 10.5 8 10.5ZM9 11.1875H7C4.794 11.1875 3 13.0376 3 15.3125V16H13V15.3125C13 13.0376 11.206 11.1875 9 11.1875Z" fill="white"></path><path d="M13.2174 9.31284C13.6029 8.61306 13.7694 7.80077 13.6927 6.99353C13.5794 5.79072 12.949 4.72748 11.9185 4L11.219 5.12325C11.9273 5.62352 12.3584 6.33617 12.4331 7.12837C12.4675 7.49656 12.4245 7.8683 12.3071 8.21655C12.1897 8.5648 12.001 8.8808 11.7545 9.14159L11 9.94525L12.0242 10.2655C14.703 11.1015 14.734 13.971 14.734 14H16C16 12.7938 15.3949 10.4368 13.2174 9.31284Z" fill="white"></path></svg></button>';
        row.insertCell(12).innerHTML = '<button type="button" class="buttons2 btn btn-primary" value = "'+sanitize(partner["partner_code"])+'"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85642 2.54902L7.42932 1.11677C7.24307 0.941184 6.999 0.840437 6.74355 0.83369C6.4881 0.826944 6.23909 0.914669 6.04389 1.08018L1.35634 5.78466C1.18799 5.95504 1.08316 6.17837 1.05946 6.41715L0.835502 8.59689C0.828486 8.67345 0.838385 8.75062 0.864493 8.82291C0.890601 8.89519 0.932275 8.9608 0.986545 9.01506C1.03521 9.06351 1.09293 9.10184 1.15639 9.12785C1.21985 9.15387 1.2878 9.16705 1.35634 9.16665H1.40322L3.57512 8.96802C3.81303 8.94423 4.03556 8.83903 4.20533 8.67007L8.89288 3.96559C9.07482 3.77269 9.17315 3.51527 9.16631 3.24974C9.15948 2.98422 9.04804 2.73224 8.85642 2.54902ZM7.08557 4.2949L5.68972 2.89402L6.70536 1.84858L8.12725 3.2756L7.08557 4.2949Z" fill="white"></path></svg></button>';



    });

}

function iniData(){
    let cookies = new Cookies();
    let token = cookies.get('accessToken');
    const AuthStr = 'Bearer '.concat(token);
    axios.get(process.env.REACT_APP_BACKEND_URL+'/api/retrievepartner', { headers: { Authorization: AuthStr } })
     .then(response => {
        // If request is good...
       arrPartner = response.data;
       fillTable()
     })
     .catch((error) => {
        console.log('error ' + error);
     });
  };

export const Table_Partner = () => (
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
                            <th>Jenis Partner</th>
                            <th>Nomor Partner</th>
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
