import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.facebook.com/juantatan"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.linkedin.com/in/jsrubianoj/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://github.com/jsrubianoj"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="https://wa.me/573192345933"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">
            Copyright &copy; Sebastián Rubiano 2021.
          </p>
          <p className="text-muted small mb-0">
            Data provided by Marvel. © 2021 Marvel
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
