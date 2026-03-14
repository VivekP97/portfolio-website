import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { BlurredBackground } from './components/layout/BlurredBackground'
import { Hero } from './components/hero/Hero'
import { Timeline } from './components/timeline/Timeline'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/layout/Footer'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <BlurredBackground />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative z-10 pb-[25vh]">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <div
          className="border-t border-sage-200 dark:border-sage-700"
          aria-hidden
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
