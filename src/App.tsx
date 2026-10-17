import { useTheme } from './hooks'
import { useI18n } from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data/cv'

export default function App() {
  const [theme, toggle] = useTheme()
  const { t } = useI18n()
  return (
    <>
      <a className="skip" href="#about">{t.skip}</a>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
