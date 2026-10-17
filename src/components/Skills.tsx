import Section from './Section'
import { useI18n } from '../i18n'

export default function Skills() {
  const { t, c } = useI18n()
  return (
    <Section id="skills" {...t.sections.skills}>
      <div className="grid skills stagger">
        {c.skills.map((g, i) => (
          <div key={i}className="card">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((i) => (
                <li key={i} className="chip">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="sub">{t.certs}</h3>
      <ul className="certs stagger">
        {c.certifications.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Section>
  )
}
