

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Food Truck Paradise. Tous droits réservés.
        </p>
        <p>
          Développé par Arthur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;