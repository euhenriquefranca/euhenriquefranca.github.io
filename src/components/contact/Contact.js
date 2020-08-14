import React from "react";

const Contact = () => (
  <section id="contact" className="contact pb-0">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>Sinta-se livre para entrar em contato</p>
      </div>

      <div className="row justify-content-center">
        <div
          className="col-lg-5 d-flex align-items-stretch justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="info">
            <div className="address">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Localização:</h4>
              <p>Arujá - SP, Brasil</p>
            </div>

            <div className="email">
              <i className="fas fa-envelope"></i>
              <h4>Email:</h4>
              <p>euhenriquefranca@gmail.com</p>
            </div>

            <div className="phone">
              <a href="https://whats.link/euhenriquefranca" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <h4>Telefone:</h4>
              <p>(11) 94576-3319</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
