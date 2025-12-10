import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SignOutButton } from '@clerk/clerk-react';
import type { User } from '../types/user';

function MyAccountPage() {
  const { user, isAuthenticated, loading, updateProfile, updateAvatar, logout } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Please log in to view your account.</div>;
  }

  const handleEdit = () => {
    setEditMode(true);
    setEditedUser({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    });
    setAvatarFile(null);
    setPreviewUrl(null);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      await updateProfile(editedUser);
      if (avatarFile) {
        await updateAvatar(avatarFile);
      }
      setEditMode(false);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="my-account">
      <h1>My Account</h1>
      <div className={`user-info ${editMode ? 'edit-mode' : ''}`}>
        {editMode ? (
          <>
            <img className="avatar-preview" src={previewUrl || user.avatar || ''} alt="Avatar" />
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
            <input
              type="text"
              value={editedUser.firstName || ''}
              onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
              placeholder="First Name"
            />
            <input
              type="text"
              value={editedUser.lastName || ''}
              onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
              placeholder="Last Name"
            />
            <input
              type="text"
              value={editedUser.phone || ''}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              placeholder="Phone"
            />
            <div className="edit-actions">
              <button className="edit-save-btn" onClick={handleSave}>Save</button>
              <button className="edit-cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            {user.avatar && <img src={user.avatar} alt="Avatar" />}
            <h2>{user.firstName} {user.lastName}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Created At:</strong> {user.createdAt.toLocaleDateString()}</p>
            <div className= "cta-section">
              <button className="sign-out-btn" onClick={handleEdit}>✎ Edit</button>
              <button className="sign-out-btn" onClick={logout}>➜ Log out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyAccountPage;