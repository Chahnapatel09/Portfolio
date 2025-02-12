import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-[#000514] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
