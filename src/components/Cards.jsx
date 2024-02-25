import React from 'react'

function Cards() {
  return (
    <div  className='w-full h-screen bg-zinc-900 flex gap-5 px-32 items-center'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
            <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2019-20</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[65vh]'>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#195E20] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>Arpit</button>

            </div>
            <div className='card relative w-1/2 h-full rounded-xl bg-[#195E20] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>Arpit</button>

            </div>
        </div>
    </div>
  )
}

export default Cards