import React from "react";
import logo from "../img/main.png";

const Presentation = () => (
  <section id="Presentation" className="d-flex align-items-center">
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>Olá,</h1>
          <h1>Eu sou o Henrique!</h1>
          <h2 className="text-muted">Desenvolvedor Front End</h2>
          <a href="https://whats.link/euhenriquefranca" target="_blank">
            <button className="btn btn-get-started">Vamos conversar?</button>
          </a>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={logo} className="img-fluid animated" alt="" width="60%" />
        </div>
      </div>
    </div>
  </section>
);

export default Presentation;
