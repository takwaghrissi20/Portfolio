import type { ReactNode } from 'react'
import { useReveal } from '../hooks'

type Props = { id: string; kicker: string; title: string; children: ReactNode }

export default function Section({ id, kicker, title, children }: Props) {
  const reveal = useReveal<HTMLElement>()
  return (
    <section id={id} ref={reveal.ref} className={`section ${reveal.className}`} aria-labelledby={`${id}-h`}>
      <p className="kicker" aria-hidden>{kicker}</p>
      <h2 id={`${id}-h`}>{title}</h2>
      {children}
    </section>
  )
}
