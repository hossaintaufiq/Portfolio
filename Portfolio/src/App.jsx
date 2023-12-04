
// import './App.css'
import Contact from './Components/Contact'
import Main from './Components/Main'
import SideNav from './Components/SideNav'
import Visitors from './Components/Visitors'
import Projects from './Projects/Projects'
import Work from './Work/Work'



function App() {


  return (
    <>
      <SideNav></SideNav>
      <Main></Main>
      <Work />
      <Projects/>
      <Visitors/>
      <Contact/>
    </>
  )
}

export default App
