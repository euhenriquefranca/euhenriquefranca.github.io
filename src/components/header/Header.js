import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  scrollTopTop = () => {
    scroll.scrollTopTop();
  };
  render() {
    return (
      <div>
        <header className="fixed-top" id="header-top">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ background: "#1F232A" }}
          >
            <a className="navbar-brand" style={{ color: "#61dafb" }} href="/">
              <i className="fas fa-code" style={{ color: "#61dafb" }}></i>&nbsp;
              HENRIQUE FRANÇA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link
                    href="/"
                    className="nav-link"
                    to="Presentation"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Sobre mim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="technologies"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Tecnologias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="portfolio"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projetos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contatos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="social"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Redes sociais
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
