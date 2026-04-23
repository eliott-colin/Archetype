import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-brand">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="navbar-logo"
          >
            <img src="/logo.png" alt="ARCHETYPE Logo" className="navbar-logo-image" />
            ARCHETYPE
          </Link>
        </div>
        
        <ul className="navbar-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link to="/a-propos">À propos</Link>
          </li>
        </ul>

        <Link to="/panier" className="navbar-cart">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
