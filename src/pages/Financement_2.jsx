import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'

const mainFundingOptions = [
  {
    title: 'Entreprise avec salariés',
    organization: 'OPCO',
    href: 'https://entreprendre.service-public.gouv.fr/vosdroits/R63043',
    text: 'Le financement passe généralement par l’OPCO rattaché à la convention collective de l’entreprise. Tous les OPCO peuvent donc être concernés selon l’activité du client.',
  },
  {
    title: 'Chef d’entreprise artisanale',
    organization: 'FAFCEA',
    href: 'https://www.fafcea.com/',
    text: 'Pertinent pour les artisans et dirigeants relevant de l’artisanat, notamment dans les métiers techniques et du bâtiment.',
  },
  {
    title: 'Dirigeant non salarié',
    organization: 'AGEFICE',
    href: 'https://communication-agefice.fr/',
    text: 'Peut concerner les dirigeants indépendants du commerce, de l’industrie et des services, selon leur statut et leur contribution formation.',
  },
]

const secondaryFundingOptions = [
  {
    title: 'Profession libérale',
    organization: 'FIF PL',
    href: 'https://www.fifpl.fr/',
    text: 'À vérifier pour certains profils libéraux : bureaux d’études, consultants, diagnostiqueurs ou activités proches.',
  },
  {
    title: 'Secteur agricole',
    organization: 'VIVEA',
    href: 'https://vivea.fr/',
    text: 'Concerne les actifs non salariés agricoles, sous conditions d’éligibilité propres au fonds.',
  },
  {
    title: 'Demandeur d’emploi',
    organization: 'France Travail',
    href: 'https://www.francetravail.fr/faq/candidat/mon-projet-de-formation/le-financement-de-la-formation/financement-formation-france-tra.html',
    text: 'Un financement peut être étudié dans le cadre du projet professionnel : CPF, AIF, Région ou autre dispositif validé par le conseiller.',
  },
]

const checkpoints = [
  'Statut du participant : salarié, dirigeant, indépendant ou demandeur d’emploi',
  'Convention collective, IDCC ou code APE de l’entreprise',
  'Programme de formation et convention signée',
  'Éventuelle éligibilité CPF si la formation est référencée',
]

export default function Financement2() {
  const heroImage = `${import.meta.env.BASE_URL}financements.jpg`

  return (
    <>
      <PageHero
        className="funding-hero"
        style={{ '--funding-hero-image': `url("${heroImage}")` }}
        eyebrow="Financements"
        title="Trouver le bon financeur sans multiplier les démarches"
        text="Pour une habilitation électrique, le financeur dépend surtout du statut du participant et de l’activité de l’entreprise. L’objectif est d’identifier le bon interlocuteur avant de déposer le dossier."
      />

      <section className="section funding-intro-section">
        <div className="container funding-intro-grid">
          <div>
            <span className="eyebrow">Principe simple</span>
            <h2>Ce n’est pas la formation qui détermine seule le financeur</h2>
            <p>
              Une habilitation électrique peut concerner beaucoup de secteurs :
              bâtiment, industrie, maintenance, services, collectivités ou
              établissements recevant du public. Le bon organisme dépend donc
              d’abord du statut du stagiaire et du rattachement de son
              entreprise.
            </p>
          </div>

          <div className="funding-documents">
            {checkpoints.map((checkpoint) => (
              <span key={checkpoint}>
                <Icon name="check" size={17} />
                {checkpoint}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section funding-paths-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Cas les plus fréquents</span>
            <h2>Les organismes à regarder en priorité</h2>
            <p>
              Pour des formations en prévention du risque électrique, ces trois
              pistes couvrent la majorité des demandes côté entreprises et
              indépendants.
            </p>
          </div>

          <div className="funding-paths-grid">
            {mainFundingOptions.map((option) => (
              <article className="funding-path-card" key={option.organization}>
                <span className="funding-path-label">{option.title}</span>
                <h3>{option.organization}</h3>
                <p>{option.text}</p>
                <a href={option.href} target="_blank" rel="noreferrer">
                  Vérifier l’organisme
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
            <span className="eyebrow">Selon les profils</span>
            <h2>Autres financeurs possibles</h2>
            <p>
              Ces organismes ne sont pas à mettre au même niveau pour tous les
              clients. Ils deviennent pertinents uniquement si le statut du
              participant correspond.
            </p>
          </div>

          <div className="opco-grid">
            {secondaryFundingOptions.map((option) => (
              <a
                className="opco-card"
                href={option.href}
                key={option.organization}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{option.organization}</strong>
                <span>{option.title}</span>
                <span>{option.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section funding-cta-section">
        <div className="container cta-card compact">
          <div>
            <h2>Vous ne savez pas quel financeur contacter ?</h2>
            <p>
              Envoyez le statut du participant, l’activité de l’entreprise et
              la formation visée. Nous vous orientons vers la piste la plus
              cohérente.
            </p>
          </div>

          <Link className="button button-yellow" to="/contact">
            Demander une orientation
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}
