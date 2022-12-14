import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { FaReact } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import bg from '../assets/endless-clouds.svg'
import About from './About';
import FeaturedProjects from './FeaturedProjects';
import Slideshow from './Slideshow';
import { Slide } from '@mui/material';
import GitCalendar from '../components/GitCalendar';
import Breadcrumbs from '../components/Breadcrumbs'
import AboutNew from './AboutNew';

function Home() {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center'>
      {/* about */}
      <div className="w-full flex items-center justify-center p-12 bg-gradient-to-b from-black/20 to-slate-900">
          <div className=" z-20 flex gap-2 flex-col w-full items-center justify-center h-full">
              <div className="text-white font-md text-xl flex-col flex ">
                Hello, my name is
                <h2 className='font-extrabold -mt-2 py-2 w-[220px] text-transparent text-6xl 
                  bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500'>
                   Zachary
                </h2>
              </div>
              <div className="text-gray-200/90 text-md max-w-[540px] mt-4 font-medium">
              I'm a front end developer that specializes in building 
              <span className='text-transparent 
                  bg-clip-text bg-gradient-to-bl from-indigo-500 to-sky-500 font-semibold'> exceptional</span> digital experiences.  I have a passion for creating efficient products that achieve elegant solutions. </div>
              {/* Project Modal */}
              <div className=' space-y-4 text-gray-200/90 text-md'>
                <h2 className='text-sm max-w-[px] flex flex-col items-center'>
{/* Current Date Modal */}
                <span className='text-xs text-gray-400/80 bg-black/40 rounded-full p-1 mb-2 flex items-center justify-center w-[80px]'>{date}</span>
{/* Current Project */}
                <span>My latest project is a <span className='underline underline-offset-2 decoration-indigo-500/80'> wordle clone</span>
            <span> built using: <div className='flex items-center justify-center my-1 gap-2'><FaReact className='text-sky-500 -mr-1'/> <p>React</p><SiTailwindcss className='text-sky-500 -mr-1'/><p>TailwindCSS</p></div></span></span></h2>
              <a href="/projects" className="inline-flex items-center rounded-full bg-black/40 p-1 pr-2 m-2 text-white hover:text-gray-200 hover:bg-black/90 sm:text-base lg:text-sm xl:text-base">
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 px-3 py-0.5 text-sm font-md leading-5 text-white">
                        Github
                      </span>
                      <span className="ml-4 text-sm">View my activity</span>
                      <ChevronRight className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                </div>
                
                <div className='flex-col items-center text-xs'>
                <GitCalendar className=''/>
                <div className='flex items-center justify-end m-2 text-xs'>
                  <button className='text-slate-300/90 hover:text-indigo-500 transition duration-300 hover:translate-x-1'>
                  <div className="flex items-center gap-1">
                  <GitHubIcon className=''/> 
                  <span>View my github activity</span>
                  <ChevronRight className="h-5 w-5 text-gray-500 -ml-2" aria-hidden="true" />
                  </div>
                 </button>
                </div>
                </div>
                
          </div>
          
      </div>
    <About />
    <AboutNew />
    <FeaturedProjects />
    </div>
  )
}

export default Home