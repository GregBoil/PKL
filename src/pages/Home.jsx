import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { trainings } from '../data'

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" />
              Prévention du risque électrique
            </span>

            <h1>
              Formations en habilitation électrique pour{' '}
              <span>entreprises et professionnels</span>
            </h1>

            <p>
              Pierre Klein accompagne vos équipes dans la compréhension du
              risque électrique et l’acquisition de pratiques sûres, adaptées à
              leurs missions.
            </p>

            <div className="button-row">
              <Link className="button button-primary" to="/formations">
                Découvrir les formations
                <Icon name="arrow" size={19} />
              </Link>
              <Link className="button button-secondary" to="/contact">
                Demander un devis
              </Link>
            </div>

            <div className="hero-trust">
              <span>
                <Icon name="check" size={18} />
                Approche pédagogique
              </span>
              <span>
                <Icon name="check" size={18} />
                Contenu contextualisé
              </span>
              <span>
                <Icon name="check" size={18} />
                Évaluation adaptée
              </span>
            </div>
          </div>

          {/*
          <div className="portrait-wrap">
            <div className="portrait-accent" />
            <div className="portrait-card">
              <img
                src="/PierreKlein.png"
                alt="Pierre Klein, formateur en habilitation électrique"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="portrait-fallback">
                <span className="portrait-initials">PK</span>
                <span>Photo de Pierre Klein</span>
              </div>
              <div className="portrait-caption">
                <span className="caption-icon">
                  <Icon name="bolt" size={19} />
                </span>
                <div>
                  <strong>Pierre Klein</strong>
                  <span>Formateur indépendant</span>
                </div>
              </div>
            </div>
            <div className="safety-card">
              <Icon name="shield" size={27} />
              <div>
                <strong>La sécurité au cœur</strong>
                <span>de chaque formation</span>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      <section className="section definition-section">
        <div className="container split-grid">
          <div>
            <SectionHeading
              eyebrow="Comprendre"
              title="Qu’est-ce qu’une habilitation électrique ?"
            />

            <div className="definition-copy">
              <p>
                L’habilitation électrique reconnaît la capacité d’un salarié à
                réaliser ses missions en sécurité face au risque électrique. Elle
                est délivrée par l’employeur, en fonction du poste, des tâches
                confiées et de l’environnement de travail.
              </p>
              <p>
                La formation s’adresse aux personnes amenées à intervenir sur ou
                à proximité d’installations électriques : techniciens, agents de
                maintenance, personnels d’exploitation, encadrants ou
                intervenants non électriciens exposés dans leur activité.
              </p>
              <p>
                Former vos équipes permet de clarifier les gestes autorisés, de
                réduire les situations à risque et de répondre aux obligations du
                <strong> Code du travail</strong> et de la norme{' '}
                <strong>NF C 18-510</strong>.
              </p>
            </div>

            <div className="info-alert">
              <Icon name="document" />
              <p>
                La formation prépare et évalue les acquis.{' '}
                <strong>
                  L’employeur reste responsable de la délivrance du titre
                  d’habilitation adapté
                </strong>
                , après évaluation et en tenant compte de l’aptitude et des
                tâches confiées.
              </p>
            </div>
          </div>

          <div className="definition-image">
            <img
              src="/comp_2.jpg"
              alt="Intervention professionnelle liée à la prévention du risque électrique"
            />
          </div>
        </div>
      </section>

      <section className="section professional-section">
        <div className="container professional-grid">
          <div className="professional-photo">
            <img
              src="/PierreKlein.png"
              alt="Pierre Klein, formateur en habilitation électrique"
            />
          </div>

          <div className="professional-content">
            <SectionHeading
              eyebrow="Le professionnel"
              title="Un formateur issu du terrain"
            />

            <div className="professional-copy">
              <p>
                Pierre Klein est formateur indépendant en habilitations
                électriques BT/HT. Avant de transmettre, il a exercé pendant
                près de vingt ans dans des environnements techniques :
                maintenance industrielle, équipements électriques, suivi
                d’interventions et contraintes de chantier.
              </p>
              <p>
                Ce parcours lui permet d’aborder la sécurité électrique avec des
                exemples concrets, proches des situations rencontrées par les
                équipes. L’objectif n’est pas seulement de connaître les règles,
                mais de comprendre comment les appliquer avec discernement dans
                le travail quotidien.
              </p>
            </div>

            <div className="professional-highlights">
              <span>BTS électrotechnique</span>
              <span>Expérience maintenance</span>
              <span>Approche terrain</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section trainings-preview">
        <div className="container">
          <div className="heading-row">
            <SectionHeading
              eyebrow="Les formations"
              title="Des parcours adaptés à vos besoins"
              text="Les contenus sont ajustés au public, aux opérations réalisées et au contexte de votre entreprise."
            />

            <Link className="text-link" to="/formations">
              Voir toutes les formations
              <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div className="training-grid">
            {trainings.map((training) => (
              <article className="training-card" key={training.id}>
                <span className="training-index">{training.eyebrow}</span>
                <h3>{training.title}</h3>
                <p>{training.summary}</p>

                <div className="training-meta">
                  <span>
                    <small>Durée</small>
                    {training.duration}
                  </span>
                  <span>
                    <small>Public</small>À définir
                  </span>
                </div>

                <Link
                  className="button button-outline"
                  to={`/formations#${training.id}`}
                >
                  Voir le programme
                  <Icon name="arrow" size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <div>
            <span className="eyebrow eyebrow-light">Un besoin spécifique ?</span>
            <h2>Construisons une formation adaptée à vos équipes.</h2>
            <p>
              Échangeons sur vos métiers, vos contraintes et les situations de
              travail rencontrées.
            </p>
          </div>

          <Link className="button button-yellow" to="/contact">
            Demander un devis
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}
