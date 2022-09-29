import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import Proj1 from "../assets/proj1.jpg"
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { FaReact } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

function FeaturedProjects() {
  return (
    <div className='flex items-center justify-center mx-auto w-full p-12 border-y border-gray-200/10 bg-gradient-to-tr from-black/80 via-indigo-500/10 to-black/80'>
         {/* Featured Section */}
         <div className=''>
            <div className='flex items-center mb-12 gap-4'>
                <div className=''>
                <h2 className='font-extrabold text-transparent text-4xl 
                        bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500'>
                        Some Things I've Built
                        </h2>
                </div>
                <span className='bg-white/20 w-[200px] h-[1px]'></span>
            </div>
        {/* content container */}
        <div className='flex items-center text-gray-200/80'>
            {/* img container */}
            <a href="#" className='transition-all hover:bg-gradient-to-r from-black/40 to-transparent'><div className='flex -mr-[100px]'>
                <img src={Proj1} className='w-full h-[300px] 
                rounded-lg shadow-lg border 
                border-gray-200/20
                saturate-150 -z-10' alt="" />
            </div></a>
            {/* Description container */}
            <div className='flex flex-col gap-2 text-right'>
                <p className='text-indigo-500 font-bold tracking-widest text-sm'>
                    Featured Project
                </p>
                <span><a href='' className='font-bold text-2xl text-slate-300/90 hover:text-indigo-500'>
                    Algorithm Visualizer
                </a></span>
                {/* Description */}
                <div className='rounded-lg text-sm bg-black/60 min-w-[400px] shadow-lg hover:shadow-2xl py-8 px-4 max-w-[400px] shadow-lg border border-gray-200/10'>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                {/* Skills Used */}
                <div className='text-xs gap-6 text-slate-300/50'>
                <div className='flex flex-row-reverse gap-2'>
                    <div className='flex items-center justify-center gap-2'><FaReact className='text-sky-500 w-4 h-4 -mr-1'/> <p>React</p></div>
                    <div className='flex items-center justify-center gap-2'><SiTailwindcss className='text-sky-500 w-4 h-4 -mr-1'/><p>TailwindCSS</p></div>
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex gap-2 justify-end items-center'>
                <div className='flex'><button className='text-slate-300/90 hover:text-indigo-500 transition duration-300 hover:-translate-y-1'>
                    <GitHubIcon />
                </button>
                </div>
                <div className='flex mt-1'><button className='text-white hover:text-indigo-500 transition duration-300 hover:-translate-y-1'>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </button></div>
                </div>
            </div>
        </div>
        </div>
        {/* other projects */}
     
    </div>
  )
}

export default FeaturedProjects