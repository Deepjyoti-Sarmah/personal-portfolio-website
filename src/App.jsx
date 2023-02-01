import Contects from './components/Contects'
import Footer from './components/Footer'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'

function App() {

  return (
    <div >
      <Sidenav></Sidenav>
      <Main></Main>
      {/* <Work></Work> */}
      <Projects></Projects>
      <Contects></Contects>
      <Footer></Footer>
    </div>
  )
}

export default App
