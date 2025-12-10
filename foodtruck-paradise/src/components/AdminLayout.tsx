import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import '../styles/AdminPage.css';

export default function AdminLayout() {
  return (
    <div className="admin-panel">
      <AdminHeader />

      <div className="container mx-auto px-4 py-8">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
