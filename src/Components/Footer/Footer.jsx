import React from "react";
import "./FooterStyles.css";
CSS;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="https://www.jonnhyortegadev.com" target="_blank">
            Contacto
          </a>
          <a href="https://www.jonnhyortegadev.com" target="_blank">
            Política de Privacidad
          </a>
          <a href="https://www.jonnhyortegadev.coms" target="_blank">
            Términos de Servicio
          </a>
        </div>
        <h2>
          <a href="https://www.jonnhyortegadev.com" target="_blank">
            Creator
          </a>
        </h2>
        <p className="footer-copy">
          © 2024 todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
