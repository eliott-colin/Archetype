import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import './App.css';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-layout">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/produit/:id" element={<Produit />} />
              <Route path="/panier" element={<Panier />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </Router>
  );
}
