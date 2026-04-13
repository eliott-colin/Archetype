import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ARCHETYPE</h3>
            <p className="slogan">
              Voyager plus lentement, regarder plus loin, laisser moins de traces.
            </p>
          </div>

          <div className="footer-section">
            <h4>Liens</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/catalogue">Catalogue</a></li>
              <li><a href="/panier">Panier</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="mailto:contact@archetype-studio.fr">Contact</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#privacy">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ARCHETYPE Studio. Tous droits réservés.</p>
          <p className="coordinates">N 48°51'24" E 2°21'07"</p>
        </div>
      </div>
    </footer>
  );
}
