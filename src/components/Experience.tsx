import Section from './Section'
import { useI18n } from '../i18n'

export default function Experience() {
  const { t, c } = useI18n()
  return (
    <Section id="experience" {...t.sections.experience}>
      <ol className="timeline stagger">
        {c.experience.map((job, i) => (
          <li key={i}className={`card job${t.present.test(job.period) ? ' current' : ''}`}>
            <div className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
              </div>
              <span className="period">{job.period}</span>
            </div>
            <ul className="points">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ul className="chips" aria-label={t.tech}>
              {job.tech.map((x) => (
                <li key={x} className="chip">{x}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
