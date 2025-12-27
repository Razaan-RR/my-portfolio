import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  )
}

export default Home