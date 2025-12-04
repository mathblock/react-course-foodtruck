function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <p className="footer-title">🌮 Food Truck Paradise</p>
        <p className="footer-text">
          Le goût du voyage, servi avec passion.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Food Truck Paradise — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;

