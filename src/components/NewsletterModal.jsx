import { useEffect, useRef, useState } from 'react';
import './NewsletterModal.css';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitted) {
      return;
    }

    setSubmittedEmail(email);
    setIsSubmitted(true);
    setEmail('');

    closeTimeoutRef.current = setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsSubmitted(false);
    setSubmittedEmail('');
    setEmail('');
    onClose();
  };

  return (
    <div className="newsletter-overlay" role="presentation" onClick={handleClose}>
      <section
        className="newsletter-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="newsletter-close"
          aria-label="Fermer la popup"
          onClick={handleClose}
        >
          ×
        </button>

        <p className="newsletter-kicker">Offre de bienvenue</p>
        <h2 id="newsletter-title">Inscris-toi à la newsletter</h2>
        <p className="newsletter-description">
          Recois les nouveautés Archetype et des inspirations exclusives.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email">Ton email</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="exemple@email.com"
            required
          />
          {!isSubmitted && <button type="submit">Je m'inscris</button>}
        </form>

        {isSubmitted && (
          <p className="newsletter-success">
            Merci {submittedEmail} ! Ton inscription est bien enregistrée.
          </p>
        )}
      </section>
    </div>
  );
}