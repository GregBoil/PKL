import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'
import { trainings } from '../data'

const choiceSteps = [
  {
    number: '01',
    title: 'Identifier les tâches réalisées',
    text: 'Lister les opérations confiées, les équipements concernés et les responsabilités.',
  },
  {
    number: '02',
    title: 'Évaluer l’environnement électrique',
    text: 'Repérer les installations, les zones à risque et les conditions d’intervention.',
  },
  {
    number: '03',
    title: 'Choisir l’habilitation adaptée',
    text: 'Définir le niveau de formation cohérent avec les besoins identifiés par l’employeur.',
  },
]

export default function Formations() {
  const [active, setActive] = useState(0)
  const training = trainings[active]
  const programUrl = `${import.meta.env.BASE_URL}Formation_1.pdf`

  return (
    <>
      <PageHero
        eyebrow="Nos parcours"
        title="Des formations pensées pour les situations de travail"
        text="Chaque parcours est précisé avec l’entreprise afin de correspondre aux tâches réalisées, au niveau des participants et à leur environnement électrique."
      />

      <section className="section formations-section">
        <div className="container">
          <div
            className="tabs"
            role="tablist"
            aria-label="Choisir une formation"
          >
            {trainings.map((item, index) => (
              <button
                key={item.id}
                className={active === index ? 'tab active' : 'tab'}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={active === index}
              >
                {/*<span>0{index + 1}</span>*/}
                {item.title}
              </button>
            ))}
          </div>

          <article className="training-detail" id={training.id}>
            <div className="detail-intro">
              <span className="eyebrow">{training.eyebrow}</span>
              <h2>{training.title}</h2>
              <p>{training.summary}</p>

              <div className="detail-duration">
                <Icon name="calendar" />
                <span>
                  <small>Durée indicative</small>
                  <strong>{training.duration}</strong>
                </span>
              </div>

              <a
                className="button button-primary"
                href={programUrl}
                target="_blank"
                rel="noreferrer"
              >
                Voir le programme PDF
                <Icon name="document" size={18} />
              </a>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="card-icon">
                  <Icon name="target" />
                </span>
                <div>
                  <h3>Public concerné</h3>
                  <p>{training.audience}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="card-icon">
                  <Icon name="trend" />
                </span>
                <div>
                  <h3>Objectifs pédagogiques</h3>
                  <ul>
                    {training.objectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="detail-item">
                <span className="card-icon">
                  <Icon name="document" />
                </span>
                <div>
                  <h3>Pré-requis</h3>
                  <p>{training.prerequisites}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="card-icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <h3>Méthodes pédagogiques</h3>
                  <p>{training.methods}</p>
                </div>
              </div>

              <div className="detail-item full">
                <span className="card-icon">
                  <Icon name="check" />
                </span>
                <div>
                  <h3>Évaluation</h3>
                  <p>{training.evaluation}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section choice-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Être bien orienté</span>
            <h2>Comment choisir la bonne formation ?</h2>
            <p>
              Le bon parcours part toujours du travail réellement effectué par
              les participants.
            </p>
          </div>

          <div className="choice-grid">
            {choiceSteps.map((step) => (
              <article className="choice-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card compact">
          <div>
            <h2>Vous ne savez pas quelle formation choisir ?</h2>
            <p>
              Décrivez vos besoins et bénéficiez d’un premier échange pour
              orienter votre démarche.
            </p>
          </div>

          <Link className="button button-yellow" to="/contact">
            Demander conseil
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  )
}
