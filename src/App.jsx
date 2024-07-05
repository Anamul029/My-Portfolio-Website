
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects'
import SkillCard from './components/SkillCard/SkillCard'

function App() {

  return (
    <>

      <div className='bg-[#000319] container mx-auto'>
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <SkillCard></SkillCard>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
