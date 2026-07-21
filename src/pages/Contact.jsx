import { useState } from 'react'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'
import { contactDetails, trainings } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Parlons de votre projet"
        title="Demande de devis et prise de contact"
        text="Présentez votre besoin, le public à former et votre contexte. Pierre Klein reviendra vers vous pour préciser le parcours le plus adapté."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <div className="section-heading">
              <span className="eyebrow">Coordonnées</span>
              <h2>Échangeons simplement</h2>
              <p>
                Pour une question, une demande de devis ou un besoin
                d’orientation, utilisez le formulaire ou réservez un échange.
              </p>
            </div>

            <div className="contact-list">
              {contactDetails.map((detail) => (
                <div className="contact-item" key={detail.label}>
                  <span className="card-icon">
                    <Icon name={detail.icon} />
                  </span>
                  <div>
                    <small>{detail.label}</small>
                    <strong>{detail.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <a
              className="calendly-card"
              href="https://calendly.com/contact-pklformation"
              target="_blank"
              rel="noreferrer"
            >
              <span className="calendar-icon">
                <Icon name="calendar" />
              </span>
              <span>
                <small>Calendly</small>
                <strong>Réserver un créneau d’échange</strong>
              </span>
              <Icon name="arrow" />
            </a>

            <div className="contact-reassurance">
              <Icon name="shield" />
              <p>
                Votre demande sera étudiée en tenant compte des métiers, des
                tâches et du contexte réel de votre entreprise.
              </p>
            </div>
          </aside>

          <div className="form-card">
            <div className="form-heading">
              <span>Votre projet</span>
              <h2>Demander un devis</h2>
              <p>Les champs marqués d’un * sont nécessaires.</p>
            </div>

            {sent ? (
              <div className="success-message" role="status">
                <span>
                  <Icon name="check" size={32} />
                </span>
                <h3>Votre demande est prête.</h3>
                <p>
                  Le formulaire est actuellement en mode démonstration. Il pourra
                  être relié à votre solution d’envoi lors de la mise en ligne.
                </p>
                <button
                  className="button button-secondary"
                  onClick={() => setSent(false)}
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    Nom / prénom *
                    <input name="name" autoComplete="name" required />
                  </label>

                  <label>
                    Entreprise *
                    <input
                      name="company"
                      autoComplete="organization"
                      required
                    />
                  </label>

                  <label>
                    Email *
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label>
                    Téléphone
                    <input type="tel" name="phone" autoComplete="tel" />
                  </label>

                  <label>
                    Formation souhaitée
                    <select name="training" defaultValue="">
                      <option value="">À définir ensemble</option>
                      {trainings.map((training) => (
                        <option key={training.id}>{training.title}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Nombre de personnes
                    <input
                      type="number"
                      name="participants"
                      min="1"
                      placeholder="Ex. 8"
                    />
                  </label>

                  <label className="full-field">
                    Ville / lieu de formation
                    <input name="location" autoComplete="address-level2" />
                  </label>

                  <label className="full-field">
                    Message *
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="Décrivez les métiers concernés, les tâches réalisées et vos contraintes éventuelles…"
                    />
                  </label>
                </div>

                <label className="privacy">
                  <input type="checkbox" required />
                  <span>
                    J’accepte que mes informations soient utilisées pour
                    répondre à cette demande. *
                  </span>
                </label>

                <button
                  className="button button-primary submit-button"
                  type="submit"
                >
                  Envoyer la demande
                  <Icon name="arrow" size={19} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
