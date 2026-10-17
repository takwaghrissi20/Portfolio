import { useState } from 'react'
import Icon from './Icon'
import { useActiveSection, useScrollProgress, type Theme } from '../hooks'
import { useI18n } from '../i18n'
import { profile } from '../data/cv'

const ids = ['about', 'experience', 'projects', 'skills', 'education', 'contact'] as const

export default function Nav({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const progress = useScrollProgress()
  const { t, lang, toggle: toggleLang } = useI18n()
  return (
    <header className="nav">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label={profile.name}>
          <span>T</span>B
        </a>
        <nav className={open ? 'open' : ''} aria-label="Primary">
          {ids.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLang} aria-label={t.langAria} lang={lang === 'en' ? 'fr' : 'en'}>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
            <span className={lang === 'fr' ? 'on' : ''}>FR</span>
          </button>
          <button className="icon-btn" onClick={onToggle} aria-label={theme === 'dark' ? t.toLight : t.toDark}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label={t.menu} aria-expanded={open}>
            <svg viewBox="0 0 24 24" className="icon" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
