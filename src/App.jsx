import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Skills from "./component/Skills"
import Projects from "./component/Projects"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import Progress from './component/progress'
import './styles/modern.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Progress />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App



