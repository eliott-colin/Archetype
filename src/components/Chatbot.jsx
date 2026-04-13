import { useState } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const responses = {
    1: {
      label: 'Délais de livraison',
      message: 'Livraison en 3-5 jours ouvrés en France.',
    },
    2: {
      label: 'Matières utilisées',
      message: '100% coton bio certifié GOTS, teintures à faible impact.',
    },
    3: {
      label: 'Retours & échanges',
      message: 'Retours gratuits sous 30 jours.',
    },
    4: {
      label: 'Tailles disponibles',
      message: 'Du S au XL. Consulte le guide des tailles sur chaque produit.',
    },
    5: {
      label: 'Nous contacter',
      message: 'Écris-nous à contact@archetype-studio.fr',
    },
  };

  const handleResponse = (key) => {
    const response = responses[key];
    setMessages([
      ...messages,
      { type: 'user', text: response.label },
      { type: 'bot', text: response.message },
    ]);
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir le chatbot"
      >
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>ARCHETYPE Assistant</h4>
            <button
              className="chatbot-close"
              onClick={() => {
                setIsOpen(false);
                setMessages([]);
              }}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                <p>Bienvenue ! Comment puis-je vous aider ?</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`message message-${msg.type}`}>
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <div className="chatbot-options">
            {Object.entries(responses).map(([key, value]) => (
              <button
                key={key}
                className="chatbot-option"
                onClick={() => handleResponse(key)}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
