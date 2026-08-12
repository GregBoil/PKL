import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { trainings } from '../data'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

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
      <section
        className="hero"
        style={{ '--hero-image': `url(${assetPath('hero_1.jpg')})` }}
      >
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-content">


            <h1>
              Formation à l'habilitation électrique {' '}
              <span>Marseille et région Sud-Est</span>
            </h1>

            <div className="button-row">
              <Link className="button button-primary" to="/formations">
                Découvrir les formations
                <Icon name="arrow" size={19} />
              </Link>
              <Link className="button button-secondary" to="/contact">
                Nous contacter
              </Link>
            </div>
          </div>

          {/*
          <div className="portrait-wrap">
            <div className="portrait-accent" />
            <div className="portrait-card">
              <img
                src={assetPath('PierreKlein.png')}
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
              title="Qu’est-ce qu’une habilitation électrique ?"
            />

            <div className="definition-copy">
              <p>
                L’habilitation électrique atteste qu’un salarié est apte à réaliser ses missions en sécurité vis-à-vis du risque électrique. 
              </p>
              <p>
                Elle concerne le personnel électricien et non électricien intervenant sur ou à proximité d’installations électriques.
              </p>
              <p>
                Elle répond aux exigences règlementaires du <strong> Code du travail</strong> et de la norme{' '}
                <strong>NF C 18-510</strong>.
              </p>
            </div>

            <div className="info-alert">
              <Icon name="document" />
              <p>
                Elle est délivrée par l’employeur à l’issue d’une formation spécialisée, sur la base de l’avis émis par le formateur.
              </p>
            </div>
          </div>

          <div className="definition-image">
            <img
              src={assetPath('comp_2.jpg')}
              alt="Intervention professionnelle liée à la prévention du risque électrique"
            />
          </div>
        </div>
      </section>

      <section className="section professional-section">
        <div className="container professional-grid">
          <div className="professional-photo">
            <img
              src={assetPath('PierreKlein.png')}
              alt="Pierre Klein, formateur en habilitation électrique"
            />
          </div>

          <div className="professional-content">
            <SectionHeading
              title="Un formateur issu du terrain"
            />

            <div className="professional-copy">
              <p>
                Pierre Klein est formateur indépendant en habilitations électriques BT/HT. Titulaire d’un BTS en électrotechnique et d’une certification de formateur, il associe expertise technique et compétences pédagogiques.
              </p>
              <p> 
                Avant de devenir formateur, il a exercé pendant près de vingt ans, d’abord comme exécutant, puis comme responsable maintenance dans des secteurs variés : industrie, tertiaire, engins de chantier, ferroviaire, agroalimentaire, blanchisserie et électronique. 
              </p>
              <p>
                Ce parcours lui permet d’aborder la sécurité électrique à partir d’exemples concrets, proches des situations rencontrées par les professionnels, quel que soit leur niveau de responsabilité.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*
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
      */}

      <section className="section cta-section">
        <div className="container cta-card">
          <div>
            <span className="eyebrow eyebrow-light">Vous ne savez pas quel titre d'habilitation choisir?</span>
            <h2>Discutons de vos besoins en formation!</h2>
            <p>
              Prenez rendez-vous pour que l'on puisse analyser ensemble vos besoins et vous proposer la formation la mieux adaptée.
            </p>
          </div>

          <Link className="button button-yellow" to="/contact">
            Me contacter
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}
