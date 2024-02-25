import React from 'react'
import {motion} from 'framer-motion'
const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-10 rounded-t-3xl bg-[#004D43]'>
        <div className='text  border-t-2 mt-3 mb-3 border-b-2 border-zinc-200 gap-10 overflow-hidden whitespace-nowrap flex'>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 7.1}} className='text-[13vw] leading-none font-["Founders Grotesk"] font-bold uppercase pt-0 pb-0 mb-[0vw] mt-[0vw] my-8 font-semibold  tracking-tighter  items-center '>Acropolis Blockchain Club</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 7.1}} className='text-[13vw] leading-none font-["Founders Grotesk"] font-bold uppercase  pt-0 pb-0 mb-[0vw] mt-[0vw] my-8 font-semibold  tracking-tighter items-center'>Acropolis Blockchain Club</motion.h1>
        </div>

    </div>
  )
}

export default Marque