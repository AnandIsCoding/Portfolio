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
import ScrollToTop from './components/ScrollToTop'
import MobileOptions from './components/MobileOptions'
import CertificateCard from './components/CertificateCard'



function App() {
  const locomotiveScroll = new LocomotiveScroll()
  const [openPanel, setOpenpanel] = useState(false)


 
  return (
   <div className='bg-gray-100 select-none overflow-x-hidden'>
   <ScrollToTop/>
   <Navbar openPanel={openPanel} setOpenpanel={setOpenpanel} />
       <Routes>
        <Route path='/' element={<>
       <Main openPanel={openPanel} setOpenpanel={setOpenpanel}/>
       <Slider/>
      
       
       <Projects/>
       {/* <Eyes/> */}
        <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-6">Certificate</h2>
      <CertificateCard
        title="Advanced Certification in Full Stack Web Development"
        issuer="Indian Institute of Technology, Guwahati"
        date="October 2024"
        imageUrl="/IIT.png"
        fileUrl="/IIT-Guwhati.pdf"
      />
    </section>
       <Scrolling/>
       
     </>}/>

       <Route path='/contact' element={<Contact/>} />
       <Route path='/about' element={<About/>} />
       </Routes>
         <Footer/>
         <MobileOptions/>
   </div>
  )
}

export default App
