import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const productImages = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image].filter(Boolean);

  const coverImage = productImages[0] || '';

  return (
    <Link to={`/produit/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={coverImage} alt={product.nom} loading="lazy" />
        {product.badge && (
          <span className={`badge ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.nom}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.prix}€</span>
          <span className="product-category">{product.categorie}</span>
        </div>
      </div>
    </Link>
  );
}
