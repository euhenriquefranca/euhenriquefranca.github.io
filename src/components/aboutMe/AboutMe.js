import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container-fluid about row d-flex justify-content-between">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img
            src="/images/image2.png"
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
            <a href="#" className="btn btn-primary">Confira meu CV</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
