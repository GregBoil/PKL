import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'

const fundingPaths = [
  {
    title: 'Profession libérale',
    organization: 'FIFPL',
    href: 'https://www.fifpl.fr/',
    text: 'Pour les chefs d’entreprise en profession libérale, la demande de prise en charge passe généralement par un espace FIFPL.',
  },
  {
    title: 'Secteur artisanat',
    organization: 'FAFCEA',
    href: 'https://www.fafcea.com/',
    text: 'Pour les entreprises artisanales, le FAFCEA peut être l’interlocuteur à consulter selon l’activité et le statut du dirigeant.',
  },
  {
    title: 'Entreprise avec salariés',
    organization: 'OPCO',
    href: 'https://www.opco.fr/',
    text: 'Les opérateurs de compétences accompagnent les entreprises pour financer la formation et identifier les besoins selon leur branche.',
  },
]

const opcos = [
  {
    name: 'AFDAS',
    href: 'https://www.afdas.com/',
    sectors: 'Culture, médias, communication, sport, tourisme, loisirs et divertissement.',
  },
  {
    name: 'ATLAS',
    href: 'https://www.opco-atlas.fr/',
    sectors: 'Assurance, services financiers, conseil et activités associées.',
  },
  {
    name: 'OCAPIAT',
    href: 'https://www.ocapiat.fr/',
    sectors: 'Agriculture, alimentaire, territoires et activités maritimes.',
  },
  {
    name: 'UNIFORMATION',
    href: 'https://www.uniformation.fr/',
    sectors: 'Cohésion sociale, services aux personnes, insertion, sport, enseignement et formation.',
  },
  {
    name: 'CONSTRUCTYS',
    href: 'https://www.constructys.fr/',
    sectors: 'Bâtiment, travaux publics, négoce des matériaux et bois.',
  },
  {
    name: "L'OPCOMMERCE",
    href: 'https://www.lopcommerce.com/',
    sectors: 'Branches professionnelles du commerce.',
  },
  {
    name: 'AKTO',
    href: 'https://www.akto.fr/',
    sectors: 'Services à forte intensité de main-d’œuvre et branches interprofessionnelles.',
  },
  {
    name: 'OPCO 2i',
    href: 'https://www.opco2i.fr/',
    sectors: 'Industries chimiques, pharmaceutiques, papier-carton, métallurgie et secteurs industriels.',
  },
  {
    name: 'OPCO Mobilités',
    href: 'https://www.opcomobilites.fr/',
    sectors: 'Transport routier, maritime, services de l’automobile et mobilités.',
  },
  {
    name: 'OPCO EP',
    href: 'https://www.opcoep.fr/',
    sectors: 'Entreprises de proximité et branches interprofessionnelles.',
  },
  {
    name: 'OPCO Santé',
    href: 'https://www.opco-sante.fr/',
    sectors: 'Professions de la santé et du médico-social.',
  },
]

const requiredDocuments = [
  'Convention de formation signée',
  'Programme de formation',
  'Attestation URSSAF formation selon votre statut',
]

export default function Financements() {
  return (
    <>
      <PageHero
        eyebrow="Financements"
        title="Identifier le bon interlocuteur pour financer la formation"
        text="Selon votre statut, votre secteur et votre branche professionnelle, une prise en charge peut être demandée auprès d’un fonds dédié ou de votre OPCO."
      />

      <section className="section funding-intro-section">
        <div className="container funding-intro-grid">
          <div>
            <span className="eyebrow">À préparer</span>
            <h2>Les démarches partent de votre situation réelle</h2>
            <p>
              Le financement dépend du statut de l’entreprise, de l’activité
              exercée et des règles propres à chaque organisme. PKL Formation
              peut vous aider à réunir les éléments utiles pour orienter votre
              demande.
            </p>
          </div>

          <div className="funding-documents">
            {requiredDocuments.map((document) => (
              <span key={document}>
                <Icon name="check" size={17} />
                {document}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section funding-paths-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Première orientation</span>
            <h2>Quel organisme contacter ?</h2>
            <p>
              Ces pistes permettent d’identifier le bon point d’entrée avant de
              déposer une demande de prise en charge.
            </p>
          </div>

          <div className="funding-paths-grid">
            {fundingPaths.map((path) => (
              <article className="funding-path-card" key={path.organization}>
                <span className="funding-path-label">{path.title}</span>
                <h3>{path.organization}</h3>
                <p>{path.text}</p>
                <a href={path.href} target="_blank" rel="noreferrer">
                  Consulter le site
                  <Icon name="arrow" size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section opco-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Les OPCO</span>
            <h2>Les principaux opérateurs de compétences</h2>
            <p>
              Les OPCO financent notamment la formation professionnelle et
              accompagnent les entreprises, en particulier les PME, dans
              l’analyse de leurs besoins.
            </p>
          </div>

          <div className="opco-grid">
            {opcos.map((opco) => (
              <a
                className="opco-card"
                href={opco.href}
                key={opco.name}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{opco.name}</strong>
                <span>{opco.sectors}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section funding-cta-section">
        <div className="container cta-card compact">
          <div>
            <h2>Vous voulez vérifier votre possibilité de prise en charge ?</h2>
            <p>
              Décrivez votre structure et la formation envisagée pour préparer
              les bons éléments avant la demande.
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
