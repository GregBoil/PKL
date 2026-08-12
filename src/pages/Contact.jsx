import { useState } from 'react'
import Icon from '../components/Icon'
import { PageHero } from '../components/Layout'
import { contactDetails, trainings } from '../data'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')
  const [formMessage, setFormMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('loading')
    setFormMessage('')
    setFieldErrors({})

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const errors = {}

    if (!payload.name?.trim()) {
      errors.name = 'Le nom est obligatoire.'
    }

    if (!payload.company?.trim()) {
      errors.company = 'L’entreprise est obligatoire.'
    }

    if (!payload.email?.trim()) {
      errors.email = 'L’e-mail est obligatoire.'
    }

    if (!payload.message?.trim()) {
      errors.message = 'Le message est obligatoire.'
    }

    if (!payload.privacy) {
      errors.privacy = 'Votre accord est nécessaire pour envoyer la demande.'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setFormStatus('idle')
      setFormMessage('Merci de compléter les champs obligatoires.')
      return
    }

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        setFieldErrors(result.errors || {})
        throw new Error(result.message || 'Erreur lors de l’envoi.')
      }

      form.reset()
      setFormStatus('success')
      setFormMessage(result.message)
    } catch (error) {
      setFormStatus('error')
      setFormMessage(
        error.message ||
          'Le message n’a pas pu être envoyé. Veuillez réessayer.'
      )
    }
  }

  return (
    <>
      <PageHero
        title="Demande de devis et prise de contact"
        text="Présentez votre besoin, le public à former et votre contexte. Pierre Klein reviendra vers vous pour préciser le parcours le plus adapté."
      />

      <section className="contact-onsite-section">
        <div className="container contact-onsite-card">
          <div className="contact-onsite-heading">
            <span className="contact-onsite-icon">
              <Icon name="pin" size={24} />
            </span>
            <div>
              <span className="eyebrow">Formation intra-entreprise</span>
              <h2>Les formations sont réalisées exclusivement dans vos locaux</h2>
            </div>
          </div>

          <div className="contact-onsite-copy">
            <p>
              Ce choix permet d’adapter les formations à votre planning et à
              votre environnement de travail.
            </p>
            <p>
              Cela permet d’échanger sur vos installations, vos pratiques ainsi
              que sur les équipements et moyens de prévention dont vous disposez
              et, le cas échéant, d’identifier avec vous des pistes
              d’amélioration pour la sécurité de vos intervenants.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <div className="section-heading">
              <h2>Me contacter</h2>
              <p>
                Pour une question, une demande de devis ou un besoin
                d’orientation, utilisez le formulaire ou réservez un échange téléphonique.
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
                <strong>Réserver un créneau d'appel</strong>
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

            {formStatus === 'success' ? (
              <div className="success-message" role="status">
                <span>
                  <Icon name="check" size={32} />
                </span>
                <h3>Votre demande a bien été envoyée.</h3>
                <p>{formMessage}</p>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    setFormStatus('idle')
                    setFormMessage('')
                    setFieldErrors({})
                  }}
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="honeypot-field" aria-hidden="true">
                  Site web
                  <input
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>

                <div className="form-grid">
                  <label>
                    Nom / prénom *
                    <input name="name" autoComplete="name" required />
                    {fieldErrors.name && (
                      <span className="field-error">{fieldErrors.name}</span>
                    )}
                  </label>

                  <label>
                    Entreprise *
                    <input
                      name="company"
                      autoComplete="organization"
                      required
                    />
                    {fieldErrors.company && (
                      <span className="field-error">{fieldErrors.company}</span>
                    )}
                  </label>

                  <label>
                    Email *
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                    {fieldErrors.email && (
                      <span className="field-error">{fieldErrors.email}</span>
                    )}
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
                    {fieldErrors.participants && (
                      <span className="field-error">
                        {fieldErrors.participants}
                      </span>
                    )}
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
                    {fieldErrors.message && (
                      <span className="field-error">{fieldErrors.message}</span>
                    )}
                  </label>
                </div>

                <label className="privacy">
                  <input type="checkbox" name="privacy" required />
                  <span>
                    J’accepte que mes informations soient utilisées pour
                    répondre à cette demande. *
                  </span>
                </label>

                {fieldErrors.privacy && (
                  <p className="form-feedback error">{fieldErrors.privacy}</p>
                )}

                {formMessage && formStatus !== 'success' && (
                  <p
                    className={`form-feedback ${
                      formStatus === 'error' ? 'error' : ''
                    }`}
                  >
                    {formMessage}
                  </p>
                )}

                <button
                  className="button button-primary submit-button"
                  type="submit"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading'
                    ? 'Envoi en cours…'
                    : 'Envoyer la demande'}
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
