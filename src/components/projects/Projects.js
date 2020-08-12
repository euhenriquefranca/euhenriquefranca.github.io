import React, { Component } from "react";

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
                <img src="/images/foodfyok.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/foodfy"
                    title="Github"
                    target="_blank"
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
                  src="/images/cobrinhaok.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/jogo_cobrinhaJS"
                    title="Github"
                    target="_blank"
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
                <img src="/images/ecoletaok.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/ecoleta"
                    title="Github"
                    target="_blank"
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
                <img src="/images/challenge.png" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/totvs-challenge-back-end"
                    title="Github"
                    target="_blank"
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
                  src="/images/gerenciadorOk.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/gerenciadorLinks-backend"
                    title="Github"
                    target="_blank"
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
                  src="/images/challenge2.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/euhenriquefranca/telzir-telefonia"
                    title="Github"
                    target="_blank"
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
