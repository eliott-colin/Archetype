import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import NewsletterModal from './components/NewsletterModal';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

export default function App() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    setIsNewsletterOpen(true);
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="app-layout">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/produit/:id" element={<Produit />} />
              <Route path="/panier" element={<Panier />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <NewsletterModal
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />
        </div>
      </CartProvider>
    </Router>
  );
}
