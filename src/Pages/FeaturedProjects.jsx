import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import Proj1 from "../assets/proj1.jpg"

function FeaturedProjects() {
  return (
    <div className='flex-col mx-auto w-full px-16'>
         <div className='flex items-center mb-8 gap-4'>
            <h2 className='font-extrabold -mt-2 py-2 text-transparent w-[189px] text-xl 
                  bg-clip-text bg-gradient-to-br from-indigo-500 to-sky-500'>
                   Some Things I've Built
            </h2>
             <span className='bg-white/20 w-[200px] h-[1px] flex'></span>
        </div>
        {/* content container */}
        <div className='flex items-center justify-between text-gray-200/80'>
            {/* img container */}
            <div className=''>
                <img src={Proj1} className='w-full h-[300px] rounded-lg shadow-lg border border-gray-200/20' alt="" />
            </div>
            {/* Description container */}
            <div className='flex flex-col gap-4 text-right'>
                <p>
                    Featured Project
                </p>
                <h1>
                    Project Name
                </h1>
                {/* Description */}
                <div className='rounded-lg bg-slate-900 shadow-xl p-6 max-w-[300px]'>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                {/* Skills Used */}
                <div>
                    React
                </div>
                {/* Buttons */}
                <div className='gap-4'>
                <button className='text-white hover:text-indigo-500'>
                    <GitHubIcon />
                </button>
                <button className='text-white hover:text-indigo-500'>
                    <GitHubIcon />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects