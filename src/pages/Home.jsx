import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Home.css';

export default function Home() {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>ARCHETYPE</h1>
          <p className="hero-subtitle">Voyager plus lentement, regarder plus loin, laisser moins de traces.</p>
          <p className="hero-coordinates">N 48°51'24" E 2°21'07"</p>
          <Link to="/catalogue" className="btn-cta">
            Découvrir nos t-shirts
          </Link>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <img 
              src="https://picsum.photos/seed/archetype-hero/800/600" 
              alt="Collection ARCHETYPE"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section-padding section-bg">
        <div className="container">
          <h2>Produits en avant</h2>
          <div className="grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="featured-cta">
            <Link to="/catalogue" className="btn-secondary">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="values section-padding">
        <div className="container">
          <h2>Nos valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Responsable</h3>
              <p>Coton bio certifié GOTS, teintures à faible impact environnemental.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✈️</div>
              <h3>Voyage</h3>
              <p>Conçus pour les aventuriers responsables qui explorent le monde.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Durable</h3>
              <p>Qualité premium pour une garde-robe intemporelle et durable.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Éthique</h3>
              <p>Production équitable avec respect des normes sociales et environnementales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding section-bg">
        <div className="container">
          <h2>Prêt à voyager responsable ?</h2>
          <p className="cta-text">
            Explorez notre collection de t-shirts premium et rejoignez notre communauté ARCHETYPE.
          </p>
          <Link to="/catalogue" className="btn-cta">
            Explorer le catalogue
          </Link>
        </div>
      </section>
    </div>
  );
}
