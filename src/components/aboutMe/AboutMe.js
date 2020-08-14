import React, { Component } from "react";
import ImageAbout from "../img/header.png";

class AboutMe extends Component {
  render() {
    return (
      <section
        id="about"
        className="container-fluid about row d-flex justify-content-between "
      >
        <div className="col-lg-6 d-flex align-items-center justify-content-center about-img">
          <img
            src={ImageAbout}
            alt="about-image"
            className="img-fluid col-12"
            data-aos="zoom-in"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 pt-5 pt-lg-0">
          <h3 data-aos="fade-up">Sobre mim</h3>
          <br />
          <p data-aos="fade-up">
            Meus pontos fortes se moldam com HTML, CSS, JavaScript e ReacJS. Me
            dedico e estudo diariamente com muito foco e empenho para entender
            mais das tecnologias e fortalecer minhas bases. Estou em constante
            aprendizado, criando projetos pessoais e sendo mentorado por amigos
            desenvolvedores.
          </p>
          <p data-aos="fade-up">
            Algumas outras tecnologias que possuo conhecimento: HTML5, CSS,
            Bootstrap, JavaScript (ES6+), React.js, Git, Node.js, MongoDB,
            Docker, REST APIs.
          </p>

          <p data-aos="fade-up">
            <a
              href="https://drive.google.com/file/d/1S3GQozOmJnjjcJwGsCQ2Pcp_KbEfnmu5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-get-cv">
                Confira meu CV
              </button>
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default AboutMe;
