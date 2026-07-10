import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { audiences, benefits, trainings } from '../data'

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow"><span className="status-dot" /> Prévention du risque électrique</span>
          <h1>Formations en habilitation électrique pour <span>entreprises et professionnels</span></h1>
          <p>Pierre Klein accompagne vos équipes dans la compréhension du risque électrique et l’acquisition de pratiques sûres, adaptées à leurs missions.</p>
          <div className="button-row"><Link className="button button-primary" to="/formations">Découvrir les formations <Icon name="arrow" size={19} /></Link><Link className="button button-secondary" to="/contact">Demander un devis</Link></div>
          <div className="hero-trust"><span><Icon name="check" size={18} /> Approche pédagogique</span><span><Icon name="check" size={18} /> Contenu contextualisé</span><span><Icon name="check" size={18} /> Évaluation adaptée</span></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-accent" />
          <div className="portrait-card">
            <img src="/PierreKlein.png" alt="Pierre Klein, formateur en habilitation électrique" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'flex' }} />
            <div className="portrait-fallback"><span className="portrait-initials">PK</span><span>Photo de Pierre Klein</span></div>
            <div className="portrait-caption"><span className="caption-icon"><Icon name="bolt" size={19} /></span><div><strong>Pierre Klein</strong><span>Formateur indépendant</span></div></div>
          </div>
          <div className="safety-card"><Icon name="shield" size={27} /><div><strong>La sécurité au cœur</strong><span>de chaque formation</span></div></div>
        </div>
      </div>
    </section>

    <section className="section definition-section"><div className="container split-grid"><div><SectionHeading eyebrow="Comprendre" title="Qu’est-ce qu’une habilitation électrique ?" /><div className="definition-copy"><p>L’habilitation électrique est la reconnaissance, par l’employeur, de la capacité d’un salarié à accomplir en sécurité les tâches qui lui sont confiées vis-à-vis du risque électrique.</p><p>Elle s’appuie sur les dispositions du <strong>Code du travail</strong> et sur les règles techniques de la norme <strong>NF C 18-510</strong>.</p></div><div className="info-alert"><Icon name="document" /><p>La formation prépare et évalue les acquis. <strong>L’employeur reste responsable de la délivrance du titre d’habilitation adapté</strong>, après évaluation et en tenant compte de l’aptitude et des tâches confiées.</p></div></div><div className="process-card"><span className="mini-label">Le parcours d’habilitation</span>{['Analyser le poste et les tâches', 'Former à la prévention du risque', 'Évaluer les connaissances et pratiques', 'Délivrance du titre par l’employeur'].map((item, index) => <div className="process-step" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div></section>

    <section className="section audience-section"><div className="container"><SectionHeading eyebrow="Publics concernés" title="Des formations pour les métiers exposés" text="Toute personne susceptible d’intervenir sur ou à proximité d’une installation électrique peut être concernée, selon la nature de ses tâches." center /><div className="audience-cloud">{audiences.map((audience) => <span key={audience}><Icon name="check" size={16} />{audience}</span>)}</div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Vos enjeux" title="Pourquoi former vos équipes ?" text="Une démarche structurée pour protéger les personnes, maîtriser les risques et répondre aux obligations de l’entreprise." /><div className="benefits-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><span className="card-icon"><Icon name={benefit.icon} size={27} /></span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>

    <section className="section trainings-preview"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Les formations" title="Des parcours adaptés à vos besoins" text="Les contenus sont ajustés au public, aux opérations réalisées et au contexte de votre entreprise." /><Link className="text-link" to="/formations">Voir toutes les formations <Icon name="arrow" size={18} /></Link></div><div className="training-grid">{trainings.map((training) => <article className="training-card" key={training.id}><span className="training-index">{training.eyebrow}</span><h3>{training.title}</h3><p>{training.summary}</p><div className="training-meta"><span><small>Durée</small>{training.duration}</span><span><small>Public</small>À définir</span></div><Link className="button button-outline" to={`/formations#${training.id}`}>Voir le programme <Icon name="arrow" size={18} /></Link></article>)}</div></div></section>

    <section className="section cta-section"><div className="container cta-card"><div><span className="eyebrow eyebrow-light">Un besoin spécifique ?</span><h2>Construisons une formation adaptée à vos équipes.</h2><p>Échangeons sur vos métiers, vos contraintes et les situations de travail rencontrées.</p></div><Link className="button button-yellow" to="/contact">Demander un devis <Icon name="arrow" size={19} /></Link></div></section>
  </>
}
