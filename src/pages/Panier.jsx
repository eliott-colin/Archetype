import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Panier.css';

export default function Panier() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckout = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      clearCart();
      setShowConfirmation(false);
    }, 3000);
  };

  if (showConfirmation) {
    return (
      <div className="panier">
        <div className="confirmation-page">
          <div className="confirmation-content">
            <div className="confirmation-icon">✓</div>
            <h1>Merci pour votre commande!</h1>
            <p>Vous recevrez un email de confirmation dans quelques instants.</p>
            <p className="confirmation-details">
              Un numéro de suivi vous sera envoyé pour vous permettre de suivre votre livraison.
            </p>
            <Link to="/" className="btn-cta">
              Continuer vos achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="panier">
      <div className="container panier-content">
        <h1 className="panier-title">Panier</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
            <Link to="/catalogue" className="btn-cta">
              Continuer les achats
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items">
              <div className="cart-header">
                <span>Produit</span>
                <span>Prix</span>
                <span>Quantité</span>
                <span>Total</span>
              </div>

              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.nom} />
                  </div>

                  <div className="item-details">
                    <h3>{item.nom}</h3>
                    <p className="item-size">Taille: {item.size}</p>
                  </div>

                  <div className="item-price">{item.prix}€</div>

                  <div className="item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value) || 1)}
                      className="qty-input"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    {(item.prix * item.quantity).toFixed(2)}€
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="remove-btn"
                    title="Supprimer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside className="cart-summary">
              <div className="summary-card">
                <h2>Résumé</h2>

                <div className="summary-row">
                  <span>Sous-total</span>
                  <span>{getCartTotal().toFixed(2)}€</span>
                </div>

                <div className="summary-row">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <span>{getCartTotal().toFixed(2)}€</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn-cta btn-checkout"
                >
                  Commander
                </button>

                <Link to="/catalogue" className="continue-shopping">
                  Continuer les achats
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
