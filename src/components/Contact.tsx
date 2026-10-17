import { useState, type FormEvent } from 'react'
import Section from './Section'
import Icon, { type IconName } from './Icon'
import { useI18n } from '../i18n'
import { profile } from '../data/cv'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const MAX = 1000
const empty = { name: '', email: '', topic: 0, message: '' }

function CopyButton({ value, label }: { value: string; label: string }) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }
  return (
    <button type="button" className="copy" onClick={copy} aria-label={t.contact.copyAria(label)}>
      <Icon name={copied ? 'check' : 'copy'} />
      <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
    </button>
  )
}

function Line({ icon, label, value, href, external, copy }: { icon: IconName; label: string; value: string; href: string; external?: boolean; copy?: boolean }) {
  return (
    <li>
      <Icon name={icon} />
      <span className="k">{label}</span>
      <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{value}</a>
      {copy && <CopyButton value={value} label={label} />}
    </li>
  )
}

export default function Contact() {
  const { t, c } = useI18n()
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(empty)
  const [status, setStatus] = useState<Status>('idle')
  const k = t.contact

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const topic = c.topics[form.topic]

    // Fallback when no Web3Forms key is configured: open the visitor's mail client.
    if (!profile.web3formsKey) {
      const subject = encodeURIComponent(k.subject(topic, form.name))
      const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: k.subject(topic, form.name),
          from_name: 'Portfolio website',
          name: form.name,
          email: form.email,
          topic,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message)
      setSent(form)
      setForm(empty)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const update = (key: 'name' | 'email' | 'message') => (e: { target: { value: string } }) => {
    setForm({ ...form, [key]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  return (
    <Section id="contact" {...t.sections.contact}>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="pitch">
            {k.pitchPre}<a href={`mailto:${profile.email}`}>{k.pitchLink}</a>{k.pitchPost}
          </p>

          <ul className="lines stagger">
            <Line icon="mail" label={k.email} value={profile.email} href={`mailto:${profile.email}`} copy />
            <Line icon="phone" label={k.phone} value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} copy />
            <Line icon="github" label={k.github} value="github.com/takwaghrissi20" href={profile.github} external />
            {profile.linkedin && <Line icon="mail" label="LinkedIn" value="Takwa Benleghrissi" href={profile.linkedin} external />}
          </ul>
          <p className="note">{k.basedIn(c.location)}</p>
        </div>

        {status === 'sent' ? (
          <div className="sent" role="status" aria-live="polite">
            <p className="sent-title"><Icon name="check" /> {k.sentTitle(sent.name.trim().split(/\s+/)[0])}</p>
            <p className="sent-meta"><Icon name="clock" /> {k.expected} {c.replyBy}</p>
            <button className="link-btn" type="button" onClick={() => setStatus('idle')}>{k.another}</button>
          </div>
        ) : (
          <form className="form" onSubmit={submit}>
            <fieldset className="topics">
              <legend>{k.topic}</legend>
              <div role="radiogroup" aria-label={k.topic}>
                {c.topics.map((label, i) => (
                  <button
                    key={i}
                    type="button"
                    role="radio"
                    aria-checked={form.topic === i}
                    onClick={() => setForm({ ...form, topic: i })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="pair">
              <label>
                {k.name}
                <input required value={form.name} onChange={update('name')} autoComplete="name" />
              </label>
              <label>
                {k.email}
                <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
              </label>
            </div>

            <label>
              {k.message}
              <textarea required rows={6} maxLength={MAX} value={form.message} onChange={update('message')} />
              <span className="counter">{form.message.length} / {MAX}</span>
            </label>

            <div className="form-foot">
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? k.sending : k.send}
              </button>
              <p className={`form-status ${status}`} role="alert">
                {status === 'error' && k.error(profile.email)}
              </p>
            </div>
          </form>
        )}
      </div>
    </Section>
  )
}
