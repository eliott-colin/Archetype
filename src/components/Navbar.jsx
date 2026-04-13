import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          ARCHETYPE
        </Link>
        
        <ul className="navbar-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
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
