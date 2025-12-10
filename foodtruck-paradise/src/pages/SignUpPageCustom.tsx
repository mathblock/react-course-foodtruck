import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function SignUpPageCustom() {
  const { signup } = useAuth();
  const { signUp } = useSignUp();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();
  setError('');
  setSuccess('');

  const showError = (message: string) => {
    setError(message);
    setShowPopup(true);
  };

  // Regex pour mot de passe sécurisé
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Regex pour email valide
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName.length < 2 || lastName.length < 2) { 
    showError('Le prénom et le nom doivent contenir au moins 2 caractères.');
    return;
  }

  if (!emailRegex.test(email)) {
    showError("L'adresse email n'est pas valide.");
    return;
  }

  if (!passwordRegex.test(password)) {
    showError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&).');
    return;
  }

  if (password !== confirmPassword) {
    showError('Les mots de passe ne correspondent pas.');
    return;
  }

  try {
    await signup(
        firstName,
        lastName,
        email,
        password
    );
    setPendingVerification(true);
    setSuccess('Un code de vérification a été envoyé à votre email.');
  } catch (err: any) {
    setError(err.errors?.[0]?.message || "Erreur lors de l'inscription");
  }
};

const handleVerify = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  if (!signUp) {
    setError("Erreur: Session d'inscription non trouvée");
    return;
  }
  
  try {
    const completeSignUp = await signUp.attemptEmailAddressVerification({
      code,
    });

    if (completeSignUp.status === 'complete') {
      await completeSignUp.createdSessionId;
      setSuccess('Inscription réussie ! Redirection...');
      setTimeout(() => {
        window.location.href = '/account';
      }, 1000);
    }
  } catch (err: any) {
    setError(err.errors?.[0]?.message || "Code de vérification invalide");
  }
};

  return (
     <div className="signin-page">
      {!pendingVerification ? (
      <form onSubmit={handleSubmit}>
        <h2>Créer un compte</h2>
        <div>
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
          className="espacement"
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
          className="espacement"
        />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="email"
        />
        <div>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="espacement"
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          className="espacement"
        />
        </div>
        <div id="clerk-captcha"></div>
        <button type="submit" className='email'>S'inscrire</button>
        <p>J'ai un compte <span className = "inscrire"><Link to="/signin">se connecter</Link></span> !</p>
        {error && <div className="error-message">{error}</div>}
        {success && <div style={{ color: 'green', textAlign: 'center' }}>{success}</div>}
      </form>
      ) : (
      <form onSubmit={handleVerify}>
        <h2>Vérifier votre email</h2>
        <p style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Un code de vérification a été envoyé à {email}
        </p>
        <div>
          <input
            type="text"
            placeholder="Code de vérification"
            value={code}
            onChange={e => setCode(e.target.value)}
            required
            className='email'
          />
          <button type="submit" className='email'>Vérifier</button>
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div style={{ color: 'green', textAlign: 'center' }}>{success}</div>}
      </form>
      )}
    </div>
  );
}
export default SignUpPageCustom;