import Header from "./layouts/Header/Header"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import Experience from "./Pages/Experience/Experience"
import Footer from "./layouts/Footer/Footer"

import {Element} from 'react-scroll'

function App() {

  return (
      <div className="flex flex-col justify-between ">
        <Header/>
        <main className="max-w-[350px] tg:max-w-[500px] md:max-w-[842px] mx-auto px-4">
          <Element name="home">
            <Home/>
          </Element>

          <Element name="projects">
            <Projects/>
          </Element>

          <Element name="experience">
            <Experience/>
          </Element>
        </main>
        <Element name="footer">
          <Footer/>
        </Element>
      </div>
  )
}

export default App
