// src/components/Footer.jsx
import React from 'react';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/src/assets/AluraFlux Logo Final 912x426.png" alt="AluraFlix Logo" className="app-logo" />
        <p>&copy; 2024 AluraFlix. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
