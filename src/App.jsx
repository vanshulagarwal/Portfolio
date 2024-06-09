import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Cursor from './components/Cursor/Cursor'
import { useRef, useState } from 'react'
import PreLoader from './components/PreLoader/PreLoader'
import Footer from './components/Footer/Footer'

function App() {

  const btnRefs = useRef([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const addBtnRef = (ref) => {
    if (ref && !btnRefs.current.includes(ref)) {
      btnRefs.current.push(ref);
      setIsUpdated(prev => prev + 1);
    }
  };

  return (
    <>
      <PreLoader />
      <Cursor btnRefs={btnRefs} isUpdated={isUpdated}/>
      <Navbar addBtnRef={addBtnRef} />
      <Home addBtnRef={addBtnRef} />
      <About />
      <Projects addBtnRef={addBtnRef} />
      <Skills addBtnRef={addBtnRef} />
      {/* <Experience addBtnRef={addBtnRef} /> */}
      <Contact addBtnRef={addBtnRef} />
      <Footer addBtnRef={addBtnRef} />
    </>
  )
}

export default App
