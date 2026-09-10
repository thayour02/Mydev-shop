import ModernNavbar from "./component/ModernNavbar"
import ModernHero from "./component/ModernHero"
import ModernSkills from "./component/ModernSkills"
import ModernProjects from "./component/ModernProjects"
import ModernContact from "./component/ModernContact"
import ModernFooter from "./component/ModernFooter"
import Progress from './component/progress'
import './styles/modern.css'

function AppModern() {
  return (
    <div className="min-h-screen bg-black">
      <Progress />
      <ModernNavbar />
      <ModernHero />
      <ModernSkills />
      <ModernProjects />
      <ModernContact />
      <ModernFooter />
    </div>
  )
}

export default AppModern
