import React, { Component } from "react";
import ImageAbout from "../img/header.png";

class AboutMe extends Component {
  render() {
    return (
      <section
        id="about"
        className="container-fluid about row d-flex justify-content-between pb-0"
      >
        <div className="col-lg-6 d-flex align-items-center justify-content-center about-img">
          <img
            src={ImageAbout}
            alt="about-image"
            className="img-fluid col-12"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 pt-5 pt-lg-0">
          <h3>Sobre mim</h3>
          <br />
          <p>
            Meus pontos fortes se moldam com HTML, CSS, JavaScript e ReacJS. Me
            dedico e estudo diariamente com muito foco e empenho para entender
            mais das tecnologias e fortalecer minhas bases. Estou em constante
            aprendizado, criando projetos pessoais e sendo mentorado por amigos
            desenvolvedores.
          </p>
          <p>
            Algumas outras tecnologias que possuo conhecimento: HTML5, CSS,
            Bootstrap, JavaScript (ES6+), React.js, Git, Node.js, MongoDB,
            Docker, REST APIs.
          </p>

          <p>
            <button
              type="button"
              href="/"
              className="btn btn-get-cv"
            >
              Confira meu CV
            </button>
          </p>
        </div>
      </section>
    );
  }
}

export default AboutMe;
