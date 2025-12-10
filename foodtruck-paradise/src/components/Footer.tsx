import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Foodtruck Paradise - Tous droits réservés</p>
        <Link to="/admin" className="admin-link">
          Admin Panel
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
