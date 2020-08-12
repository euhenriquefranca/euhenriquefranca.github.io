import React, { Component } from "react";
import foodfy from '../img/foodfyok.png'
import cobrinha from '../img/cobrinhaok.png'
import ecoleta from '../img/ecoletaok.png'
import challenge from '../img/challenge.png'
import gerenciador from '../img/gerenciadorOk.png'
import challenge2 from '../img/challenge2.png'

class Projects extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Projetos</h2>
            <p>Confira meus projetos</p>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-react">
              <div className="portfolio-wrap">
                <img src={foodfy} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/foodfy"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Foodfy</h4>
                  <p>HTML / CSS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-rn">
              <div className="portfolio-wrap">
                <img
                    src={cobrinha}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/jogo_cobrinhaJS"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Jogo da cobrinha</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-js">
              <div className="portfolio-wrap">
                <img src={ecoleta} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/ecoleta"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Ecoleta</h4>
                  <p>JavaScript / NodeJS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-rn">
              <div className="portfolio-wrap">
                <img src={challenge} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/totvs-challenge-back-end"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Challenge Fullstack</h4>
                  <p>ReactJS / NodeJS / MongoDB / Docker</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-rn">
              <div className="portfolio-wrap">
                <img
                  src={gerenciador}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/gerenciadorLinks-backend"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Gerenciador de links</h4>
                  <p>React / NodeJS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-rn">
              <div className="portfolio-wrap">
                <img
                  src={challenge2}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/telzir-telefonia"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Challenge JavaScript</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
