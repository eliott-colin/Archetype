import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import './Produit.css';

export default function Produit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="produit-error">
        <div className="container">
          <h1>Produit non trouvé</h1>
          <button
            onClick={() => navigate('/catalogue')}
            className="btn-cta"
          >
            Retour au catalogue
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setMessage('✓ Ajouté au panier!');
    setTimeout(() => setMessage(''), 2000);
  };

  const relatedProducts = productsData
    .filter((p) => p.categorie === product.categorie && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="produit">
      <div className="container produit-content">
        {/* Product Details */}
        <div className="produit-layout">
          <div className="produit-image">
            <img src={product.image} alt={product.nom} />
            {product.badge && (
              <span className={`badge ${product.badge.toLowerCase()}`}>
                {product.badge}
              </span>
            )}
          </div>

          <div className="produit-info">
            <div className="produit-header">
              <h1>{product.nom}</h1>
              <p className="produit-category">{product.categorie}</p>
            </div>

            <div className="produit-price">
              <span className="price">{product.prix}€</span>
            </div>

            <p className="produit-description">{product.description}</p>

            {/* Size Selection */}
            <div className="produit-section">
              <label className="section-label">Taille</label>
              <div className="size-options">
                {product.tailles.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="produit-section">
              <label className="section-label">Quantité</label>
              <div className="quantity-control">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="produit-actions">
              <button
                onClick={handleAddToCart}
                className="btn-cta btn-large"
              >
                Ajouter au panier
              </button>
              {message && <p className="add-message">{message}</p>}
            </div>

            {/* Details */}
            <div className="produit-details">
              <h3>Détails</h3>
              <ul>
                <li>
                  <strong>Matière :</strong> 100% coton bio certifié GOTS
                </li>
                <li>
                  <strong>Teinture :</strong> Teintures à faible impact
                </li>
                <li>
                  <strong>Tailles disponibles :</strong> {product.tailles.join(', ')}
                </li>
                <li>
                  <strong>Catégorie :</strong> {product.categorie}
                </li>
                <li>
                  <strong>Livraison :</strong> 3-5 jours ouvrés en France
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-section section-padding">
            <h2>Produits connexes</h2>
            <div className="grid">
              {relatedProducts.map((prod) => (
                <div key={prod.id} className="related-card">
                  <img src={prod.image} alt={prod.nom} />
                  <h4>{prod.nom}</h4>
                  <p className="related-price">{prod.prix}€</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
