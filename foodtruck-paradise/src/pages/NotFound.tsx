import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>404 - Page Non Trouvée</h2>
                <p>Oups ! La page que vous cherchez n'existe pas.</p>
                <Link to="/" style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.8rem 1.5rem',
                    background: '#ff6b35',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem'
                }}>
                    Retourner à l'accueil
                </Link>
            </div>
        </section>
    );
}
