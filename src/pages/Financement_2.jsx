import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'

const opcos = [
  {
    name: 'Afdas',
    initials: 'AFDAS',
    logo: 'opco-logos/afdas.svg',
    href: 'https://www.afdas.com/',
    sectors: 'Culture, médias, communication, sport, tourisme et loisirs',
  },
  {
    name: 'Atlas',
    initials: 'ATLAS',
    logo: 'opco-logos/atlas.svg',
    href: 'https://www.opco-atlas.fr/',
    sectors: 'Services financiers, conseil et ingénierie',
  },
  {
    name: 'Akto',
    initials: 'AKTO',
    logo: 'opco-logos/akto.png',
    href: 'https://www.akto.fr/',
    sectors: 'Services à forte intensité de main-d’œuvre',
  },
  {
    name: 'Ocapiat',
    initials: 'OCAPIAT',
    logo: 'opco-logos/ocapiat.png',
    href: 'https://www.ocapiat.fr/',
    sectors: 'Agriculture, alimentaire, territoires et mer',
  },
  {
    name: 'Uniformation',
    initials: 'UNI',
    logo: 'opco-logos/uniformation.svg',
    href: 'https://www.uniformation.fr/',
    sectors: 'Cohésion sociale et services aux personnes',
  },
  {
    name: 'Constructys',
    initials: 'Const',
    logo: 'opco-logos/constructys.gif',
    href: 'https://www.constructys.fr/',
    sectors: 'Construction, bâtiment et travaux publics',
  },
  {
    name: "L’Opcommerce",
    initials: 'CO',
    logo: 'opco-logos/opcommerce.svg',
    href: 'https://www.lopcommerce.com/',
    sectors: 'Commerce et branches professionnelles associées',
  },
  {
    name: 'Opco 2i',
    initials: '2i',
    logo: 'opco-logos/opco2i.svg',
    href: 'https://www.opco2i.fr/',
    sectors: 'Industries et branches interindustrielles',
  },
  {
    name: 'Opco Mobilités',
    initials: 'Mobi',
    logo: '',
    href: 'https://www.opcomobilites.fr/',
    sectors: 'Transport, automobile et services de mobilité',
  },
  {
    name: 'Opco EP',
    initials: 'EP',
    logo: 'opco-logos/opcoep.svg',
    href: 'https://www.opcoep.fr/',
    sectors: 'Entreprises de proximité',
  },
  {
    name: 'Opco Santé',
    initials: 'SANTÉ',
    logo: 'opco-logos/sante.png',
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
        title="Financer votre projet de formation"
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
          </div>

          <aside className="funding-support-card">
            <span className="eyebrow">À quel OPCO vous adresser ?</span>
            <p>Suivez le lien ci-dessous et renseignez le SIRET de votre entreprise :</p>
            <a
              className="funding-general-link"
              href="https://www.opco.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Consulter le portail général des OPCO
              <Icon name="arrow" size={18} />
            </a>
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
                <span className="opco-monogram opco-logo-frame" aria-hidden="true">
                  <img
                    src={`${import.meta.env.BASE_URL}${opco.logo}`}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      event.currentTarget.nextElementSibling.style.display = 'grid'
                    }}
                  />
                  <span className="opco-logo-fallback">{opco.initials}</span>
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
    </>
  )
}
