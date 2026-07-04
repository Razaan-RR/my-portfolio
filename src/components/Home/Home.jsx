import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
