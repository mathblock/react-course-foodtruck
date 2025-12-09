
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Oups ! Page introuvable</h2>
            <p className="not-found-text">
                Erreur de navigation. Page non trouvée.
            </p>
            <Link to="/" className="button-home">
                Retour au menu
            </Link>
        </div>
    );
};

export default NotFound;
