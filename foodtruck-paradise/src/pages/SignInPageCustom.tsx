import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useSignIn } from '@clerk/clerk-react';

function SignInPageCustom() {
  const { login } = useAuth();
  const { signIn } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      window.location.href = '/account';
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Erreur lors de la connexion');
    }
  };

  return (
    <div className="signin-page signin-page-custom"> 
      <form onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        <div className="divider">ou</div>
        <button type="button" className="google-btn" onClick={() => signIn.authenticateWithRedirect({ strategy: 'oauth_google', redirectUrl: '/account' })}>Se connecter avec Google</button>
        {error && <div className="error-message">{error}</div>}
        <p>Je n'ai pas de compte <span className = "inscrire"><Link to="/signup">s'inscrire</Link></span> !</p>
      </form>
    </div>
  );
}

export default SignInPageCustom;