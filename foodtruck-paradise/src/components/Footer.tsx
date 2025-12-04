import "../module/Footer.css";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear} Mon Restaurant Délicieux. Tous droits réservés.
        </p>
        <p>
          Fait avec amour et beaucoup de frites
        </p>
      </div>
    </footer>
  );
};

export default Footer;