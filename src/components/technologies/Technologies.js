import React from "react";

const Technologies = () => (
  <section id="services" class="services section-bg">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Tecnologias</h2>
        <p>Confira as tecnologias que mais utilizo</p>
      </div>

      <div className="row">
        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-html5"></i>
            </div>
            <h4 className="title">
              <a>HTML</a>
            </h4>
            <p className="description">
              HTML é uma linguagem de marcação utilizada na construção de
              páginas web
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-css3-alt"></i>
            </div>
            <h4 className="title">
              <a>CSS</a>
            </h4>
            <p className="description">
              O CSS define como serão exibidos os elementos contidos no código
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-js"></i>
            </div>
            <h4 className="title">
              <a>JavaScript</a>
            </h4>
            <p className="description">
              Uma das linguagens de programação mais utilizadas hoje em dia
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-node-js"></i>
            </div>
            <h4 className="title">
              <a>Node.js</a>
            </h4>
            <p className="description">
              Com essa tecnologia podemos criar desde sites até APIs diretamente
              do servidor
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-react"></i>
            </div>
            <h4 className="title">
              <a>React JS</a>
            </h4>
            <p className="description">
              Biblioteca usada para construir interface de usuário (UI)
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fab fa-bootstrap"></i>
            </div>
            <h4 className="title">
              <a>Bootstrap</a>
            </h4>
            <p className="description">
              Framework com código fonte aberto para desenvolvimento Front End
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon">
              <i class="fab fa-docker"></i>
            </div>
            <h4 className="title">
              <a>Docker</a>
            </h4>
            <p className="description">
              Plataforma open-source cuja finalidade é criar ambientes isolados
              para aplicações e serviços.
            </p>
          </div>
        </div>

        <div
          className="col-md-6 col-lg-3 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="icon-box">
            <div className="icon">
              <i className="fas fa-database"></i>
            </div>
            <h4 className="title">
              <a>MongoDB</a>
            </h4>
            <p className="description">
              Banco de dados orientado a documentos (document database) no
              formato JSON.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;
