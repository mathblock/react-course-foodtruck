
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>404 - Page non trouvée</h2>
            <p>Oups ! La page que vous cherchez n'existe pas.</p>
            <Link to="/" className="button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Retour au menu
            </Link>
        </div>
    );
};

export default NotFound;
