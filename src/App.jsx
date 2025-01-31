import Banner from "./component/banner"
// import Contact from "./component/contact"
import Icon from "./component/icons"
import Navbar from "./component/navbar"
import Skill from './component/skill'
import Projects from './component/project'
import Tech from "./component/language"
import Edu from "./component/journey"
import Contact from './component/contact'
import Foooter from "./component/footer"
import Progress from './component/progress'
import Themes from "./component/theme"
import Home from "./component/home"

function App() {

  return (
    <>
    <Themes/>
    <Progress/>
      <div className='bg-bgColor text-whiteColor font-font2 lg:px-[10%]  w-[100%] relative h-full'>
        <Navbar />
        <Icon/>
        {/* <Banner/> */}
        <Home/>
        <Skill/>
        <Tech/>
        <Projects/>
        <Edu/>
        <Contact/>
        <Foooter/>

        {/* <Contact /> */}
      </div>
    </>
  )
}

export default App
