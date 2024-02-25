import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.4' className='w-full px-16 py-20 bg-[#CDEA68] rounded-t-3xl text-[#212121] font-md '>
        <h1 className='min-w-[786px] max-width-[115rem] font-["Neue Montreal","Roboto",""sans-serif] text-[4rem] leading-[3.7vw] ' >{"Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, explain comlex ideas, and hire great peo­ple."}</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our approach:</h1>
                <button className='flex items-center gap-16 px-10 py-6 bg-zinc-900 rounded-full text-l font-semibold text-white uppercase mt-10'>Read more
                     <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>

            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-black'></div>
        </div>
        
    </div>
  )
}

export default About