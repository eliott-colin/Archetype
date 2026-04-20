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
        <div style={{alignItems:"center", display:"flex",gap:"20px"}}>
          <Link
            to="/"
            onClick={handleLogoClick}
            className="navbar-logo"
            style={{alignItems : "center", display:"flex",gap:"12px"}}
          >
          <img src="/logo.png" alt="ARCHETYPE Logo" style={{width:"56px",borderRadius:"100%"}} />
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
        </ul>

        <Link to="/panier" className="navbar-cart">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
