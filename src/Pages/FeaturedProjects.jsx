import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import Proj1 from "../assets/proj1.jpg"
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { FaReact } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

function FeaturedProjects() {
  return (
    <div className='flex-col mx-auto px-16'>
         <div className='flex items-center mb-4 gap-4'>
         <div className='flex items-center justify-center'>
         <h2 className='font-extrabold text-transparent text-xl 
                  bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500'>
                   Some Things I've Built
                </h2>
         </div>
        <span className='bg-white/20 w-[200px] h-[1px]'></span>
    </div>
        {/* content container */}
        <div className='flex items-center justify-between text-gray-200/80'>
            {/* img container */}
            <div className='flex -mr-[100px]'>
                <img src={Proj1} className='w-full h-[300px] 
                rounded-lg shadow-lg border 
                border-gray-200/20
                saturate-150 -z-10' alt="" />
            </div>
            {/* Description container */}
            <div className='flex flex-col gap-2 text-right'>
                <p className='text-indigo-500 font-bold tracking-widest text-sm'>
                    Featured Project
                </p>
                <span><a href='' className='font-bold text-xl text-slate-300/90 hover:text-indigo-500'>
                    Algorithm Visualizer
                </a></span>
                {/* Description */}
                <div className='rounded-lg text-sm bg-black/60 shadow-lg hover:shadow-2xl py-8 px-4 max-w-[400px] shadow-lg border border-gray-200/10'>
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
                <div className=''>
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