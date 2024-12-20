import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotatevalue, setRotatevalue] = useState(0)
   
    useEffect(()=>{
        window.addEventListener('mousemove',(event)=>{
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI)
            setRotatevalue(angle-180)
        })
    },)
  return (
    <div  className="eyes w-full px-2 md:px-0  h-screen overflow-hidden mt-[-40vw] md:mt-0 ">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("image.jpg")]'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   flex gap-10">


          <div className="w-[35vw] h-[35vw] md:w-[18vw] md:h-[18vw] flex justify-center items-center rounded-full bg-white ">
            <div className="w-[60%] h-[60%] rounded-full bg-black relative ">
              <div style={{transform:`translate(-50%, -50%) rotate(${rotatevalue}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full rotate-45 h-10">
                <div className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw]  rounded-full bg-[white] "></div>
              </div>
            </div>
          </div>


          <div className="w-[35vw] h-[35vw] md:w-[18vw] md:h-[18vw] rounded-full bg-white flex items-center justify-center">
            <div className="w-[60%] h-[60%] rounded-full bg-black relative">
            <div style={{transform:`translate(-50%, -50%) rotate(${rotatevalue}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate-45 h-10">
                <div className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] rounded-full bg-[white] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
