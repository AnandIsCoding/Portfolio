import React, { useState }  from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Scrolling from './components/Scrolling'
import Eyes from './components/Eyes'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import { Routes,Route } from 'react-router-dom'
import Contact from './components/Contact';
import Slider from './components/Slider'
import About from './components/About';



function App() {
  const locomotiveScroll = new LocomotiveScroll()
  const [openPanel, setOpenpanel] = useState(false)


 
  return (
   <div className='bg-gray-100 select-none overflow-x-hidden'>
       <Routes>
        <Route path='/' element={<><Navbar openPanel={openPanel} setOpenpanel={setOpenpanel} />
       <Main openPanel={openPanel} setOpenpanel={setOpenpanel}/>
       <Slider/>
      
       <Eyes/>
       <Projects/>
       <Scrolling/>
       
       <Footer/></>}/>

       <Route path='/contact' element={<Contact/>} />
       <Route path='/about' element={<About/>} />
       </Routes>
   </div>
  )
}

export default App
