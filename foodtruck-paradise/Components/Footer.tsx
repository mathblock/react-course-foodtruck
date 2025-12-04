import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Food Truck Paradise - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;