import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { FaReact } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

function Home() {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  return (
    <div className='flex w-full h-auto shadow-xl items-center justify-center bg-gradient-to-bl from-slate-900 to-zinc-900'>
      {/* about */}
      <div className="w-full flex items-center justify-center p-12 flex items-center">
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
                  bg-clip-text bg-gradient-to-bl from-indigo-500 to-sky-500 font-semibold'> exceptional</span> digital experiences.  I have a passion for high quality, efficient code and achieving elegant solutions. </div>
              {/* line */}
              <div className='h-[200px] w-[1px] bg-gray-200/50 items-center my-8 mx-auto'></div>
              {/* Project Modal */}
              <div className=' space-y-4 text-gray-200/90 text-md'>
                <h2 className='text-sm max-w-[px] flex flex-col items-center'>
{/* Current Date Modal */}
                <span className='text-xs text-gray-400/80 bg-black/40 rounded-full p-1 mb-2 flex items-center justify-center w-[80px]'>{date}</span>
{/* Current Project */}
                <span>Currently, I’m focused on building a <span className='underline underline-offset-2 decoration-indigo-500/80'> marketplace</span>
            <span> using: <div className='flex items-center justify-center my-1 gap-2'><FaReact className='text-sky-500 -mr-1'/> <p>React</p><SiTailwindcss className='text-sky-500 -mr-1'/><p>TailwindCSS</p></div></span></span></h2>
              <a href="#" className="inline-flex items-center rounded-full bg-black/40 p-1 pr-2 m-2 text-white hover:text-gray-200 hover:bg-black/90 sm:text-base lg:text-sm xl:text-base">
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 px-3 py-0.5 text-sm font-md leading-5 text-white">
                        Latest project: Marketplace
                      </span>
                      <span className="ml-4 text-sm">Check it out</span>
                      <ChevronRight className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                </div>
          </div>


      </div>
    </div>
  )
}

export default Home