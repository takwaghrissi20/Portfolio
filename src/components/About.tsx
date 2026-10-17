import Section from './Section'
import { useReveal, useCountUp } from '../hooks'
import { useI18n } from '../i18n'

function Stat({ value, label, start }: { value: number; label: string; start: boolean }) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <b>{n}</b>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  const { t, c } = useI18n()
  const reveal = useReveal<HTMLDivElement>()
  const started = reveal.className.includes('visible')
  return (
    <Section id="about" {...t.sections.about}>
      <div className="about-grid">
        <div className="prose">
          {c.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="langs">
            {c.languages.map((l) => (
              <span key={l.name}><strong>{l.name}</strong> {l.level}</span>
            ))}
          </p>
        </div>
        <div ref={reveal.ref} className="stats stagger">
          {c.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} start={started} />
          ))}
        </div>
      </div>

      <h3 className="sub">{t.bring}</h3>
      <div className="strengths stagger">
        {c.strengths.map((s, i) => (
          <div key={s.title} className="card strength">
            <span className="num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
