import React from "react";
import "../css/Header.css";

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

class Nav extends React.Component {
  render() {
    return (
      <nav class="menu">
        <a href="#" class="active" title="Home">
          Data Partner
        </a>
        <a href="#" title="About">
          Member
        </a>
        <a href="#" title="Gallery">
          Relasi
        </a>
      </nav>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <Title />
        <Nav />
      </div>
    );
  }
}

export const Header = () => (
  <React.Fragment>
    <Header />
  </React.Fragment>
);
