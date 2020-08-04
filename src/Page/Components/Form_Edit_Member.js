import React from 'react';
import '../css/Form.css';
import { Modal, Button, Row, Col, Form,  } from 'react-bootstrap';

export class Form_Edit_Member extends React.Component{
  constructor(props) {
    super(props);
    this.partnerCode = this.props.partnerCode;
    this.memberNumber = this.props.memberNumber;
    this.state = {
      member_name: "",
      member_nickname: "",
      birthplace: "",
      date_of_birth: "",
      gender: "",
      member_type: "",
      religion: "",
      language: "",
      nationality: "",
      addresses: [],
      communications: [],
      identifications: []
    };
  }
  updateData(property,event){
    this.setState({
      [property]: event.target.value
    });
  }
  updateListObjData(listName,index, property,event){
    var item = this.state[listName][index]
    item[property] = event.target.value
    this.setState({
      [listName]:[
        ...this.state[listName].slice(0,index),
        item,
        ...this.state[listName].slice(index+1)
      ]
    });
  }
  addList(listName,input,event){
    this.setState({
      [listName]:[
        ...this.state[listName],
        input
      ]
    });
  }
  deleteList(listName,index,event){
    this.setState({
      [listName]:[
        ...this.state[listName].slice(0,index),
        ...this.state[listName].slice(index+1)
      ]
    });
  }
  render() {
    return (
        <Modal size="lg" show={this.props.show} onHide={(e) => this.props.close()}>
            <Modal.Header closeButton onClick={(e) => this.props.close()}>
                <Modal.Title id="header">Tambah Data Member Partner</Modal.Title>
            </Modal.Header>
            <Modal.Body id="body">
                <Row>
                    <Col>
                        <Form.Label>Nama Partner</Form.Label>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Form.Label>Jenis Partner</Form.Label>
                        <Form.Control/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>No. Partner</Form.Label>
                        <Form.Control/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Jenis Keanggotaan</Form.Label>
                        <Form.Control as="select" placeholder="Pilih Jenis Keanggotaan">
                            <option>Pilih Jenis Keanggotaan</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Nama" value={this.state.member_name} onChange={(e) => this.updateData("member_name",e)}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Nama Panggilan" value={this.state.member_nickname} onChange={(e) => this.updateData("member_nickname",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control id="fixing" placeholder="Tempat Lahir" value={this.state.birthplace} onChange={(e) => this.updateData("birthplace",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control type="date" value={this.state.date_of_birth} onChange={(e) => this.updateData("date_of_birth",e)}/>
                    </Col>
                    <Col>
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Row>
                            <Col>
                                <Form.Check type="radio" label="Laki-Laki" value="m" name="gender" checked={this.state.gender == "m"} onChange={(e) => this.updateData("gender",e)}/>
                                <Form.Check type="radio" label="Perempuan" value="f" name="gender" checked={this.state.gender == "f"} onChange={(e) => this.updateData("gender",e)}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Agama" value={this.state.religion} onChange={(e) => this.updateData("religion",e)}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Bahasa" value={this.state.language} onChange={(e) => this.updateData("language",e)}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Kebangsaan" value={this.state.nationality} onChange={(e) => this.updateData("nationality",e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col id="col1">Data Alamat</Col>
                </Row>
                {this.state.addresses.map((item, index) => (
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Label id="fl">Alamat {index+1}</Form.Label>
                            </Col>
                            <Col>
                                <Button variant="link" onClick={(e) => this.deleteList("addresses",index,e)}>
                                    <Row>
                                        <Col>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                            </svg>
                                        </Col>
                                        <Col>Hapus</Col>
                                    </Row>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Jenis Alamat</Form.Label>
                                <Form.Control as="select" value={item.address_type} onChange={(e) => this.updateListObjData("addresses",index, "address_type",e)}>
                                    <option value="" disabled hidden>Pilih Jenis Alamat</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control id="fixing" placeholder="No. Alamat" value={item.address_number} onChange={(e) => this.updateListObjData("addresses",index, "address_number",e)}></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control id="fixing" placeholder="Nama Jalan" value={item.street} onChange={(e) => this.updateListObjData("addresses",index, "street",e)}></Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Kota" value={item.city} onChange={(e) => this.updateListObjData("addresses",index, "city",e)}></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Provinsi" value={item.state} onChange={(e) => this.updateListObjData("addresses",index, "state",e)}></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Negara" value={item.country} onChange={(e) => this.updateListObjData("addresses",index, "country",e)}></Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Kode Pos" value={item.zip_code} onChange={(e) => this.updateListObjData("addresses",index, "zip_code",e)}></Form.Control>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                ))}
                <Row>
                    <Col>
                        <Button onClick={(e) => this.addList("addresses",{address_type:"",address_number:"",street:"",city:"",state:"",country:"",zip_code:""},e)}>Tambah Data</Button>
                    </Col>
                </Row>
                <Row>
                    <Col id="col1">Data Komunikasi</Col>
                </Row>
                {this.state.communications.map((item, index) => (
                  <Row>
                      <Col>
                          <Row>
                              <Col>
                                  <Form.Label id="fl">Komunikasi {index+1}</Form.Label>
                              </Col>
                              <Col>
                                  <Button variant="link" onClick={(e) => this.deleteList("communications",index,e)}>
                                      <Row>
                                          <Col>
                                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                              </svg>
                                          </Col>
                                          <Col>Hapus</Col>
                                      </Row>
                                  </Button>
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Form.Label>Jenis Komunikasi</Form.Label>
                                  <Form.Control as="select" value={item.communication_type} onChange={(e) => this.updateListObjData("communications",index, "communication_type",e)}>
                                      <option value="" disabled hidden>Pilih Jenis Komunikasi</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                  </Form.Control>
                              </Col>
                              <Col>
                                  <Form.Control id="fixing" placeholder="No. Komunikasi" value={item.communication_order} onChange={(e) => this.updateListObjData("communications",index, "communication_order",e)}></Form.Control>
                              </Col>
                              <Col>
                                  <Form.Control id="fixing" placeholder="Identitas Komunikasi" value={item.communication_number} onChange={(e) => this.updateListObjData("communications",index, "communication_number",e)}></Form.Control>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                ))}
                <Row>
                    <Col>
                        <Button onClick={(e) => this.addList("communications",{communication_type:"",communication_order:"",communication_number:""},e)}>Tambah Data</Button>
                    </Col>
                </Row>
                <Row>
                    <Col id="col1">Data Identitas</Col>
                </Row>
                {this.state.identifications.map((item, index) => (
                  <Row>
                      <Col>
                          <Row>
                              <Col>
                                  <Form.Label id="fl">Identitas {index+1}</Form.Label>
                              </Col>
                              <Col>
                                  <Button variant="link" onClick={(e) => this.deleteList("identifications",index,e)}>
                                      <Row>
                                          <Col>
                                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M3.08333 2.49996V0.749959C3.08333 0.59525 3.14479 0.446877 3.25419 0.33748C3.36359 0.228084 3.51196 0.166626 3.66667 0.166626H8.33333C8.48804 0.166626 8.63642 0.228084 8.74581 0.33748C8.85521 0.446877 8.91667 0.59525 8.91667 0.749959V2.49996H11.8333V3.66663H10.6667V11.25C10.6667 11.4047 10.6052 11.553 10.4958 11.6624C10.3864 11.7718 10.238 11.8333 10.0833 11.8333H1.91667C1.76196 11.8333 1.61359 11.7718 1.50419 11.6624C1.39479 11.553 1.33333 11.4047 1.33333 11.25V3.66663H0.166668V2.49996H3.08333ZM4.25 1.33329V2.49996H7.75V1.33329H4.25Z" fill="#F64740"/>
                                              </svg>
                                          </Col>
                                          <Col>Hapus</Col>
                                      </Row>
                                  </Button>
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Form.Label>Jenis Identitas</Form.Label>
                                  <Form.Control as="select" value={item.identification_type} onChange={(e) => this.updateListObjData("identifications",index, "identification_type",e)}>
                                      <option value="" disabled hidden>Pilih Jenis Identitas</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                  </Form.Control>
                              </Col>
                              <Col>
                                  <Form.Control id="fixing" placeholder="No. Identitas" value={item.identification_number} onChange={(e) => this.updateListObjData("identifications",index, "identification_number",e)}></Form.Control>
                              </Col>
                              <Col>
                                  <Form.Label>Tanggal Dikeluarkan</Form.Label>
                                  <Form.Control type="date" value={item.date_of_issue} onChange={(e) => this.updateListObjData("identifications",index, "date_of_issue",e)}/>
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <Form.Label>Tanggal Kadaluarsa</Form.Label>
                                  <Form.Control type="date" value={item.date_of_expire} onChange={(e) => this.updateListObjData("identifications",index, "date_of_expire",e)}/>
                              </Col>
                              <Col>
                                  <Form.Control id="fixing" placeholder="Tempat Identitas Dikeluarkan" value={item.place_of_issue} onChange={(e) => this.updateListObjData("identifications",index, "place_of_issue",e)}></Form.Control>
                              </Col>
                              <Col>
                                  <Form.Control id="fixing" placeholder="Negara Tempat Identitas Dikeluarkan" value={item.country_of_issue} onChange={(e) => this.updateListObjData("identifications",index, "country_of_issue",e)}></Form.Control>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                ))}
                <Row>
                    <Col>
                        <Button onClick={(e) => this.addList("identifications",{identification_type:"",identification_number:"",date_of_issue:"",date_of_expire:"",place_of_issue:"",country_of_issue:""},e)}>Tambah Data</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="btnprimary2">
                            <Col xs={"auto"}>

                            </Col>
                            <Col xs={10}>Hapus Data</Col>
                        </Button>
                    </Col>
                    <Col>
                        <Button id="btnprimary3">
                            <Col xs={"auto"}>

                            </Col>
                            <Col xs={10}>Edit Data</Col>
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
  }
}
