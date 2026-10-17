import Section from './Section'
import { useI18n } from '../i18n'

export default function Education() {
  const { t, c } = useI18n()
  return (
    <Section id="education" {...t.sections.education}>
      <div className="grid stagger">
        {c.education.map((e) => (
          <div key={e.period} className="card">
            <span className="period">{e.period}</span>
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
