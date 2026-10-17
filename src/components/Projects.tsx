import Section from './Section'
import { useI18n } from '../i18n'

export default function Projects() {
  const { t, c } = useI18n()
  return (
    <Section id="projects" {...t.sections.projects}>
      <div className="grid stagger">
        {c.projects.map((p, i) => (
          <article key={i}className="card project">
            <span className="badge">{p.badge}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="chips" aria-label={t.tech}>
              {p.tech.map((x) => (
                <li key={x} className="chip">{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
