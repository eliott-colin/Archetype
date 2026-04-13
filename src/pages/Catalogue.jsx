import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Catalogue.css';

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('name');

  const categories = ['Globe', 'Atlas', 'Horizon'];

  let filtered = selectedCategory
    ? productsData.filter((p) => p.categorie === selectedCategory)
    : productsData;

  if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.nom.localeCompare(b.nom));
  } else if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.prix - b.prix);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.prix - a.prix);
  }

  return (
    <div className="catalogue">
      <div className="catalogue-header section-padding section-bg">
        <div className="container">
          <h1>Catalogue</h1>
          <p>Découvrez notre collection complète de t-shirts premium</p>
        </div>
      </div>

      <div className="catalogue-content section-padding">
        <div className="container">
          <div className="catalogue-layout">
            {/* Filtres */}
            <aside className="filters">
              <div className="filter-group">
                <h3>Catégories</h3>
                <button
                  className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Tous ({productsData.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat} ({productsData.filter((p) => p.categorie === cat).length})
                  </button>
                ))}
              </div>

              <div className="filter-group">
                <h3>Tri</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="name">Nom (A-Z)</option>
                  <option value="price-low">Prix (croissant)</option>
                  <option value="price-high">Prix (décroissant)</option>
                </select>
              </div>
            </aside>

            {/* Produits */}
            <main className="catalogue-main">
              <p className="results-count">
                {filtered.length} produit{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="grid">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
