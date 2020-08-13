import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  scrollTopTop = () => {
    scroll.scrollTopTop();
  };
  render() {
    return (
      <footer id="footer">
        <section id="social" className="social">
          <div className="footer-top">
            <div className="container">
              <div
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="footer-links">
                  <p>Onde me encontrar:</p>
                  <div className="social-links mt-3 d-flex justify-content-center">
                    <a
                      href="https://github.com/euhenriquefranca"
                      className="github"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/euhenriquefranca/?hl=pt-br"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/euhenquefranca/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                      href="https://whats.link/rafaelmartins92"
                      className="whatsapp"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container py-4">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Henrique França</span>
            </strong>{" "}
            2020
          </div>
        </div>
        <Link
          className="back-to-top"
          to="Presentation"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fas fa-chevron-circle-up fa-3x"></i>
        </Link>
      </footer>
    );
  }
}

export default Footer;
