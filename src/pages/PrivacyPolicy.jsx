import './PrivacyPolicy.css';

const sections = [
  {
    title: '1. Responsable du traitement',
    text: "ARCHETYPE Studio est responsable du traitement des donnees personnelles collectees sur ce site. Pour toute demande, vous pouvez nous contacter a l'adresse: contact@archetype-studio.fr.",
  },
  {
    title: '2. Donnees collectees',
    text: 'Nous pouvons collecter les informations suivantes: nom, prenom, adresse email, adresse de livraison, informations de commande et donnees de navigation (cookies et statistiques anonymisees).',
  },
  {
    title: '3. Finalites',
    text: 'Ces donnees sont utilisees pour traiter vos commandes, assurer le service client, ameliorer nos services, et vous envoyer des communications liees a vos achats ou a la vie de la marque si vous y avez consenti.',
  },
  {
    title: '4. Base legale',
    text: 'Le traitement repose sur l\'execution du contrat (commande), votre consentement (newsletter/cookies non essentiels), ou notre interet legitime (securite, prevention de la fraude, amelioration du site).',
  },
  {
    title: '5. Conservation',
    text: 'Les donnees sont conservees pendant la duree necessaire aux finalites poursuivies, puis archivees ou supprimees conformement aux obligations legales applicables.',
  },
  {
    title: '6. Partage des donnees',
    text: 'Vos donnees peuvent etre partagees avec des prestataires techniques (paiement, hebergement, livraison) strictement necessaires au fonctionnement du service. Nous ne vendons jamais vos donnees.',
  },
  {
    title: '7. Vos droits',
    text: 'Conformement au RGPD, vous disposez des droits d\'acces, de rectification, d\'effacement, d\'opposition, de limitation et de portabilite de vos donnees. Vous pouvez egalement retirer votre consentement a tout moment.',
  },
  {
    title: '8. Cookies',
    text: 'Le site utilise des cookies essentiels pour son bon fonctionnement et, le cas echeant, des cookies de mesure d audience. Vous pouvez gerer vos preferences depuis votre navigateur.',
  },
  {
    title: '9. Contact et reclamation',
    text: 'Pour exercer vos droits: contact@archetype-studio.fr. En cas de desaccord persistant, vous pouvez introduire une reclamation aupres de la CNIL (www.cnil.fr).',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page section-padding">
      <div className="container privacy-container">
        <header className="privacy-header">
          <p className="privacy-kicker">Informations legales</p>
          <h1>Politique de confidentialite</h1>
          <p>
            Chez ARCHETYPE, nous accordons une importance essentielle a la
            protection de vos donnees personnelles et a une utilisation
            transparente de vos informations.
          </p>
          <p className="privacy-meta">Derniere mise a jour: 23 avril 2026</p>
        </header>

        <div className="privacy-content">
          {sections.map((section) => (
            <section key={section.title} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
