import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import type { User } from '../types/user';
import { Navigate } from 'react-router-dom';

function MyAccountPage() {
  const { user, isAuthenticated, loading, updateProfile, updateAvatar, logout } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    // redirect to sign-in page
    return <Navigate to="/signin" replace />;
  }

  const handleEdit = () => {
    setEditMode(true);
    setEditedUser({
      firstName: user.firstName,
      lastName: user.lastName,
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

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSave = async () => {
    setShowConfirmModal(false);
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
      setToastMessage('Votre compte a été mis à jour avec succès!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Failed to update profile:', error);
      setToastMessage('Échec de la mise à jour du compte. Veuillez réessayer.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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
            <p><strong>Created At:</strong> {user.createdAt.toLocaleDateString()}</p>
            <div className= "cta-section">
              <button className="sign-out-btn" onClick={handleEdit}>✎ Edit</button>
              <button className="sign-out-btn" onClick={logout}>➜ Log out</button>
            </div>
          </>
        )}
      </div>
      {showConfirmModal && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-icon">⚠️</div>
            <p>Voulez-vous vraiment enregistrer les modifications apportées à votre compte ?</p>
            <div>
              <button className="confirm-btn" onClick={handleConfirmSave}>Confirm</button>
              <button className="cancel-btn" onClick={() => setShowConfirmModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showToast && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default MyAccountPage;