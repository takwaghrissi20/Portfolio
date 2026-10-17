import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './data/en'
import { fr } from './data/fr'
import { ui, type UI } from './data/ui'
import type { Content } from './data/en'

export type Lang = 'en' | 'fr'

type Ctx = { lang: Lang; toggle: () => void; t: UI; c: Content }

const content: Record<Lang, Content> = { en, fr }
const I18n = createContext<Ctx | null>(null)

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

const pageTitle: Record<Lang, string> = {
  en: 'Takwa Benleghrissi | Full-Stack & DevOps Engineer',
  fr: 'Takwa Benleghrissi | Développement Full-Stack & DevOps',
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = pageTitle[lang]
    try {
      localStorage.setItem('lang', lang)
    } catch {}
  }, [lang])

  const value = useMemo<Ctx>(
    () => ({ lang, toggle: () => setLang((l) => (l === 'en' ? 'fr' : 'en')), t: ui[lang], c: content[lang] }),
    [lang],
  )
  return <I18n.Provider value={value}>{children}</I18n.Provider>
}

export function useI18n() {
  const ctx = useContext(I18n)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
