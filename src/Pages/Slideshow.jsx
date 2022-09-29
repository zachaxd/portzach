import React from 'react'
import Proj1 from "../assets/proj1.jpg"

function Slideshow() {
  return (
    <div className='flex-col items-center justify-center bg-gradient-to-r from-slate-900/20 via-indigo-500/20 to-slate-900/20
     mx-auto p-6 border-y border-gray-200/10'>
        <h1 className='text-3xl font-bold text-indigo-500'>Some Things I've Built</h1>
        <a href="#" className=''>
            <div className=''>
                <img src={Proj1} alt="" className='w-[960px] h-[480px] rounded-lg border-2 border-gray-200/10'/>
            </div>
        </a>
    </div>
  )
}

export default Slideshow