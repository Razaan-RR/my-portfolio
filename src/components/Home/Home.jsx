import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
