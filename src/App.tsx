import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/hero/Hero'
import { Timeline } from './components/timeline/Timeline'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/contact/Contact'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
