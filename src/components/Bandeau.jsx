import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Bandeau.css';

export default function Bandeau() {
  return (
    <div className="bandeau">
      <div className="bandeau-content">
        <p className="bandeau-slogan">
          Bénéficiez de -15% sur votre première commande avec le code <strong>ARCHETYPE15</strong> ! Offre valable pour une durée limitée.
        </p>
      </div>
    </div>
  );
}