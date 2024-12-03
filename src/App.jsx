import React, { useState }  from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Scrolling from './components/Scrolling'
import Eyes from './components/Eyes'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  const locomotiveScroll = new LocomotiveScroll()
  const [openPanel, setOpenpanel] = useState(false)
 
  return (
   <div className='bg-gray-100'>
       <Navbar openPanel={openPanel} setOpenpanel={setOpenpanel} />
       <Main openPanel={openPanel} setOpenpanel={setOpenpanel}/>
       <Scrolling/>
       <Eyes/>
       <Projects/>
       <Footer/>
   </div>
  )
}

export default App
