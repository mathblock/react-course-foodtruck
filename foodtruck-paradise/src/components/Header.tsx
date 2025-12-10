import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from "../hooks/useFavorites";

const links : {path:string; label:string; auth:string}[]=[
    { path: '/', label: 'Accueil', auth: 'both' },
    { path: '/menu', label: 'Menu', auth: 'both' },
    { path: '/cart', label: 'Panier', auth: 'both' },
    { path: '/signin', label: 'Se connecter', auth: 'out' },
    { path: '/signup', label: "S'inscrire", auth: 'out' },
  { path: '/favorites', label: "Les Favoris", auth: 'both'}
];

function Header() {
  const { user, isAuthenticated } = useAuth();
  const { count} = useFavorites();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🌮 Foodtruck Paradise</h1>
        </Link>
        <nav>
          {links
            .filter(link => link.auth === 'both' || (link.auth === 'out' && !isAuthenticated))
            .map(link => (
              <Link key={link.path} to={link.path}>{link.label}{link.label==="Les Favoris" && count()>0 ? `(${count()})` :'' }</Link>
            ))}
          <div className="clerk-auth">
              {isAuthenticated && (
                <div className="info-user">
                  <Link to="/account"><img src={user?.avatar} alt="Avatar" /></Link>                
                  <Link to="/account">{user?.firstName}</Link>
                </div>
              )
            }
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
