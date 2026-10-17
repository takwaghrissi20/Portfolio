import { useEffect, useRef, useState } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

/** Adds the `visible` class once the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, className: `reveal${visible ? ' visible' : ''}` }
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Counts from 0 to `target` once `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    if (reducedMotion()) {
      setValue(target)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return value
}

/** Cycles through `items` every `ms` milliseconds. */
export function useRotating(items: readonly string[], ms = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % items.length), ms)
    return () => clearInterval(id)
  }, [items.length, ms])
  return { text: items[i], index: i }
}

/** Page scroll progress, 0..1. */
export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}

/** Id of the section currently crossing the reading line (upper middle of the viewport). */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}
