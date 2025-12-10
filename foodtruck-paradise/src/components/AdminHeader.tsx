import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-container">
        <div className="admin-header-content">
          <div className="admin-brand-nav">
            <Link to="/" className="admin-brand-link">Foodtruck Paradise</Link>
            <nav className="admin-nav">
              <Link to="/admin" className="admin-link">Users</Link>
              <Link to="/admin/menu" className="admin-link">Menu Items</Link>
              <Link to="/admin/promocodes" className="admin-link">Promo Codes</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}