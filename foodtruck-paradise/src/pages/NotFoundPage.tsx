import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Page non trouvée</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFoundPage;
