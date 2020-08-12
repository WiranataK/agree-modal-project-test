import React from "react";
import "../css/Header.css";
import { Form_Tambah } from "./Form_Tambah";
import { Form_Tambah_Member } from "./Form_Tambah_Member";
import { Form_Tambah_Relasi } from "./Form_Tambah_Relasi";
import { Tambah_Data } from "./Tambah_Data";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Table_Partner from "./Table_Partner";
import { Table_Member } from "./Table_Member";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
    this.props.activeTabCallback(this.props.children[0].props.label)
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    this.props.activeTabCallback(tab);
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <div class="navigation_menu">
          <h3 class="header_title">Keanggotaan</h3>
          <a href="#" title="NavigationMenu">
            Menu / Keanggotaan / Data Partner
          </a>
        </div>
      </div>
    );
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_opened: false,
      activeTab: ""
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  openForm() {
    this.setState({
      form_opened: true,
    });
  }
  closeForm() {
    this.setState({
      form_opened: false,
    });
  }
  changeActiveTab(activeTab) {
    this.setState({
      activeTab: activeTab,
    });
  }
  render() {
    var form_tambah = null;
    if (this.state.form_opened) {
      switch(this.state.activeTab) {
        case "Data Partner":
          form_tambah = <Form_Tambah show={this.state.form_opened} close={this.closeForm} />;
          break;
        case "Member":
          form_tambah = <Form_Tambah_Member show={this.state.form_opened} close={this.closeForm} />;
          break;
        case "Relasi":
          form_tambah = <Form_Tambah_Relasi show={this.state.form_opened} close={this.closeForm} />;
          break;
      }
    }
    return (
      <React.Fragment>
        <div class="container header">
          <Row>
            <Col>
              <Title />
            </Col>
          </Row>
          <Row>
            <div class="col">
              <Tabs activeTabCallback={this.changeActiveTab}>
                <div label="Data Partner">
                  <Table_Partner />
                </div>
                <div label="Member">
                  <Table_Member />
                </div>
                <div label="Relasi"></div>
              </Tabs>
            </div>
            <div class="col-auto">
              <Tambah_Data onClick={(e) => this.openForm()} />
            </div>
          </Row>
        </div>
        {form_tambah}
      </React.Fragment>
    );
  }
}
