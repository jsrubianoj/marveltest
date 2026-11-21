import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <ul className="list-inline mb-4">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://github.com/jsrubianoj"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="mailto:jsrubianoj@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">
            Copyright &copy; Sebastián Rubiano 2021&ndash;2026.
          </p>
          <p className="text-muted small mb-0">
            Data provided by Marvel. &copy; MARVEL.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
