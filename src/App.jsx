import { useState, useEffect } from 'react'
import './App.css'

// Modular Components
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { RecruiterOverview } from './components/RecruiterOverview'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { EducationSection } from './components/EducationSection'
import { ContactSection, Footer } from './components/ContactSection'
import { InteractiveBackground } from './components/InteractiveBackground'

// Modular Data
import {
  recruiterHighlights,
  keyImpactMetrics,
  skillCategories,
  experiences,
  projects,
  educations,
  certifications
} from './data/portfolioData'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Synchronize theme class on html tag
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  // Header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-observe scroll animated elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className={`apple-experience ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Live Interactive Background */}
      <InteractiveBackground isDark={isDark} />

      {/* Modular Apple Frosted Header */}
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scrolled={scrolled}
      />

      <main>
        <Hero />
        {/* Recruiter & Hiring Manager Overview */}
        <RecruiterOverview highlights={recruiterHighlights} metrics={keyImpactMetrics} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection skillCategories={skillCategories} />
        <ProjectsSection projects={projects} />
        <EducationSection educations={educations} certifications={certifications} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App