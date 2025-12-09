import { useAuth } from '../context/AuthContext';
import { SignOutButton } from '@clerk/clerk-react';

function MyAccountPage() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Please log in to view your account.</div>;
  }

  return (
    <div className="my-account">
      <h1>My Account</h1>
      <div className="user-info">
        {user.avatar && <img src={user.avatar} alt="Avatar" />}
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong>{user.email}</p>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Created At:</strong> {user.createdAt.toLocaleDateString()}</p>
        <SignOutButton className="sign-out-btn" />
      </div>
    </div>
  );
}

export default MyAccountPage;