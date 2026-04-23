import './About.css';

const collections = [
	{
		title: 'Collection 01',
		subtitle: 'Les 8 merveilles du monde',
		description:
			'Notre première série rend hommage aux monuments qui traversent les siècles et racontent la grandeur des civilisations.',
	},
	{
		title: 'Collection 02+',
		subtitle: 'L’âme des pays',
		description:
			'Les prochaines collections exploreront chaque pays à travers ses paysages, son identité culturelle et son patrimoine vivant.',
	},
];

const values = [
	{
		title: 'Curiosité',
		text: 'Chaque design invite à regarder le monde avec attention, ouverture et envie de comprendre les cultures.',
	},
	{
		title: 'Respect',
		text: 'Explorer ne signifie pas consommer: nous défendons un tourisme plus lent, plus conscient et plus humain.',
	},
	{
		title: 'Préservation',
		text: 'Nous intégrons une réflexion environnementale pour encourager des voyages qui protègent ce qu’ils célèbrent.',
	},
];

export default function About() {
	return (
		<div className="about-page">
			<section className="about-hero section-padding">
				<div className="container about-hero-grid">
					<div className="about-hero-content">
						<p className="about-kicker">Notre vision</p>
						<h1>À propos d&apos;ARCHETYPE</h1>
						<p className="about-lead">
							Nous sommes une marque dédiée aux passionnés de voyage, de découverte
							et de patrimoine culturel à travers le monde.
						</p>
						<p>
							Porter nos t-shirts, c&apos;est affirmer une passion pour le voyage tout
							en soutenant une vision plus responsable de celui-ci.
						</p>
					</div>
					<div className="about-hero-panel" aria-hidden="true">
						<p className="panel-title">Manifeste</p>
						<p>
							Nous créons pour celles et ceux qui voyagent avec curiosité,
							sensibilité et respect, attachés à la beauté du monde autant qu&apos;à sa
							préservation.
						</p>
					</div>
				</div>
			</section>

			<section className="about-story section-padding">
				<div className="container">
					<h2>Notre histoire en collections</h2>
					<div className="about-collections-grid">
						{collections.map((collection) => (
							<article key={collection.title} className="about-collection-card">
								<p className="collection-index">{collection.title}</p>
								<h3>{collection.subtitle}</h3>
								<p>{collection.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="about-signature section-padding">
				<div className="container signature-content">
					<h2>Explorer le monde sans l&apos;abîmer</h2>
					<p>
						Nos créations s&apos;adressent aux personnes qui choisissent la découverte
						consciente: admirer, apprendre, transmettre, et préserver.
					</p>
				</div>
			</section>

			<section className="about-values section-padding">
				<div className="container">
					<h2>Voyager, oui. Respecter, toujours.</h2>
					<p className="about-values-intro">
						Au-delà du design, notre démarche s&apos;inscrit dans une vision
						responsable du tourisme. Nous croyons qu&apos;explorer le monde implique
						aussi de le respecter.
					</p>

					<div className="about-values-grid">
						{values.map((value) => (
							<article key={value.title} className="about-value-card">
								<h3>{value.title}</h3>
								<p>{value.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
