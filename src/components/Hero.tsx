import type { CSSProperties } from 'react'
import { useRotating } from '../hooks'
import { useI18n } from '../i18n'
import { profile } from '../data/cv'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export default function Hero() {
  const { t, c } = useI18n()
  const role = useRotating(c.heroRoles)
  return (
    <section id="top" className="hero">
      <div className="blob blob-a" aria-hidden />
      <div className="blob blob-b" aria-hidden />
      <p className="status anim" style={d(0)}>{t.hero.status}</p>
      <h1 className="anim" style={d(100)}>
        <span className="grad">{profile.name}</span>
      </h1>
      <p className="hero-title anim" style={d(200)} aria-label={c.title}>
        <span key={role.index} className="swap">{role.text}</span>
      </p>
      <p className="hero-tagline anim" style={d(300)}>{c.tagline}</p>
      <div className="hero-cta anim" style={d(400)}>
        <a className="btn primary" href="#projects">{t.hero.work}</a>
        <a className="btn" href={profile.cv} download>{t.hero.cv}</a>
        <a className="btn ghost" href="#contact">{t.hero.contact}</a>
      </div>
      <ul className="hero-stack anim" style={d(500)} aria-label={t.hero.stack}>
        {['Angular', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes', 'Keycloak'].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  )
}
