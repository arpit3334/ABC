import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {Power4} from 'gsap/all';



function Features() {
  const [isHovering1, setHovering1] = useState(false);    
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div data-scroll data-scroll-section className='w-full py-20 bg-black '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700  pb-20'>
            <h1 className='text-8xl font["Neue Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards flex gap-10 mt-10">
                <div 
                onMouseEnter={() => setHovering1(true)} 
                onMouseLeave={() => setHovering1(false)} 
                className="cardcontainer relative rounded-xl w-1/2 h-[75vh] ">
                    <h1 className='absolute left-full -translate-x-1/2 text-[#0AC886] text-8xl tracking-tighter leading-none z-[9] top-1/2 -translate-y-1/2'>
                          <h1 className='absolute flex right-full overflow-hidden translate-x-1/2 text-[#0AC886] text-8xl tracking-tighter leading-none z-[9] top-1/2 -translate-y-1/2'>
                            {"FYDE".split("").map((item,index) => (
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={isHovering1 ? {y:"0"} : {y:"100%"}} 
                            transition={{ease: Power4.easeInOut, delay: index*.01}}
                            className='inline-block'
                            >
                              {item}
                            </motion.span>
                            ))}
                          </h1>
                      </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                    </div>
                    <div onMouseEnter={()=>setHovering2(true)} onMouseLeave={()=>setHovering2(false)} className="cardcontainer relative rounded-xl w-1/2 h-[75vh] ">
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute right-full flex overflow-hidden translate-x-1/2 text-[#0AC886] text-8xl tracking-tighter leading-none z-[9] top-1/2 -translate-y-1/2'>
                      
                      {"VISE".split('').map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={isHovering2 ? ({y:"0"}) : ({y:"100%"})} 
                            transition={{ease: Power4.easeInOut, delay: index*.01}}
                            className='inline-block'
                            >
                              {item}
                            </motion.span>))}
                    </h1>
                      <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features