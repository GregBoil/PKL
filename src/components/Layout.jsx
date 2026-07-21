import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Pierre Klein Formation, accueil">
          {/*<span className="brand-mark"><Icon name="bolt" size={20} /></span>*/}
          <span className="brand-text"><strong>PKL</strong> Formation</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label="Ouvrir le menu">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/formations">Formations</NavLink>
          <NavLink to="/financements">Financements</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link className="button button-small button-primary nav-cta" to="/contact">Demander un devis</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand-light" to="/">{/*<span className="brand-mark"><Icon name="bolt" size={20} /></span>*/}<span className="brand-text"><strong>PKL</strong> Formation</span></Link>
          <p>Formation et accompagnement à la prévention du risque électrique pour les entreprises et les professionnels.</p>
        </div>
        <div className="footer-links"><strong>Navigation</strong><Link to="/">Accueil</Link><Link to="/formations">Formations</Link><Link to="/financements">Financements</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-note"><strong>À retenir</strong><p>L’employeur reste responsable de la délivrance du titre d’habilitation, après évaluation.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} PKL Formation</span><span>Prévention · Sécurité · Pédagogie</span></div>
    </footer>
  )
}

export function PageHero({ eyebrow, title, text, children }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div></section>
}
