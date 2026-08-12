import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'

const opcos = [
  {
    name: 'Afdas',
    initials: 'AFDAS',
    href: 'https://www.afdas.com/',
    sectors: 'Culture, médias, communication, sport, tourisme et loisirs',
  },
  {
    name: 'Atlas',
    initials: 'ATLAS',
    href: 'https://www.opco-atlas.fr/',
    sectors: 'Services financiers, conseil et ingénierie',
  },
  {
    name: 'Akto',
    initials: 'AKTO',
    href: 'https://www.akto.fr/',
    sectors: 'Services à forte intensité de main-d’œuvre',
  },
  {
    name: 'Ocapiat',
    initials: 'OCAPIAT',
    href: 'https://www.ocapiat.fr/',
    sectors: 'Agriculture, alimentaire, territoires et mer',
  },
  {
    name: 'Uniformation',
    initials: 'UNI',
    href: 'https://www.uniformation.fr/',
    sectors: 'Cohésion sociale et services aux personnes',
  },
  {
    name: 'Constructys',
    initials: 'C',
    href: 'https://www.constructys.fr/',
    sectors: 'Construction, bâtiment et travaux publics',
  },
  {
    name: "L’Opcommerce",
    initials: 'OC',
    href: 'https://www.lopcommerce.com/',
    sectors: 'Commerce et branches professionnelles associées',
  },
  {
    name: 'Opco 2i',
    initials: '2i',
    href: 'https://www.opco2i.fr/',
    sectors: 'Industries et branches interindustrielles',
  },
  {
    name: 'Opco Mobilités',
    initials: 'OM',
    href: 'https://www.opcomobilites.fr/',
    sectors: 'Transport, automobile et services de mobilité',
  },
  {
    name: 'Opco EP',
    initials: 'EP',
    href: 'https://www.opcoep.fr/',
    sectors: 'Entreprises de proximité',
  },
  {
    name: 'Opco Santé',
    initials: 'SANTÉ',
    href: 'https://www.opco-sante.fr/',
    sectors: 'Santé privée et secteur médico-social',
  },
]

const providedDocuments = [
  'Programme de formation détaillé',
  'Devis adapté à votre besoin',
  'Documents administratifs nécessaires',
]

export default function Financement2() {
  const heroImage = `${import.meta.env.BASE_URL}financements.jpg`

  return (
    <>
      <PageHero
        className="funding-hero funding-hero-large"
        style={{ '--funding-hero-image': `url("${heroImage}")` }}
        eyebrow="Financement de la formation"
        title="Donnez vie à votre projet de formation"
        text="Votre OPCO peut prendre en charge tout ou partie du coût de la formation, selon votre situation et les critères applicables."
      >
        <a
          className="button button-yellow funding-hero-button"
          href="https://www.opco.fr/"
          target="_blank"
          rel="noreferrer"
        >
          Trouver mon OPCO
          <Icon name="arrow" size={19} />
        </a>
      </PageHero>

      <section className="section funding-overview-section">
        <div className="container funding-overview-grid">
          <div className="funding-overview-copy">
            <span className="eyebrow">Prise en charge</span>
            <h2>Votre formation peut être financée par votre OPCO</h2>
            <p>
              Selon votre secteur d’activité, la taille de votre entreprise et
              les critères de votre OPCO, tout ou partie du coût de la formation
              peut faire l’objet d’une prise en charge.
            </p>
            <p>
              Pour permettre l’accès aux financements, les formations concernées
              sont réalisées dans le cadre de notre partenariat avec un bureau
              de contrôle reconnu en France et certifié Qualiopi.
            </p>
            <p>
              Tous les éléments nécessaires à votre demande de prise en charge
              seront fournis : programme, devis et documents administratifs.
            </p>
            <a
              className="funding-general-link"
              href="https://www.opco.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Consulter le portail général des OPCO
              <Icon name="arrow" size={18} />
            </a>
          </div>

          <aside className="funding-support-card">
            <span className="funding-support-icon">
              <Icon name="document" size={27} />
            </span>
            <span className="eyebrow">Dossier simplifié</span>
            <h3>Nous préparons les pièces utiles</h3>
            <div className="funding-support-list">
              {providedDocuments.map((document) => (
                <span key={document}>
                  <Icon name="check" size={18} />
                  {document}
                </span>
              ))}
            </div>
            <Link className="button button-primary" to="/contact">
              Préparer ma demande
              <Icon name="arrow" size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section opco-directory-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Les 11 opérateurs de compétences</span>
            <h2>Accédez directement à votre OPCO</h2>
            <p>
              Sélectionnez votre opérateur pour consulter ses critères, ses
              démarches et ses modalités de prise en charge.
            </p>
          </div>

          <div className="opco-directory-grid">
            {opcos.map((opco, index) => (
              <a
                className="opco-directory-card"
                href={opco.href}
                key={opco.name}
                target="_blank"
                rel="noreferrer"
                style={{ '--opco-index': index }}
              >
                <span className="opco-monogram" aria-hidden="true">
                  {opco.initials}
                </span>
                <span className="opco-card-content">
                  <strong>{opco.name}</strong>
                  <small>{opco.sectors}</small>
                </span>
                <span className="opco-card-arrow" aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section funding-cta-section">
        <div className="container cta-card compact">
          <div>
            <h2>Besoin d’aide pour votre demande ?</h2>
            <p>
              Présentez-nous votre projet : nous vous aidons à réunir les
              éléments nécessaires pour solliciter une prise en charge.
            </p>
          </div>

          <Link className="button button-yellow" to="/contact">
            Nous contacter
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}
