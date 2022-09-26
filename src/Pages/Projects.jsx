import React from 'react'
import ProjectItem from '../components/ProjectItem'
import ChevronRight from '@mui/icons-material/ChevronRight';
import { FaGithub, FaReact } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='bg-zinc-900 w-full p-8 items-center flex-col justify-center flex text-gray-200'>
      <div className='mb-8 p-8'><h1 className='text-4xl font-bold mb-6 max-h-[20px]'>Things I’ve made</h1>
      <span className='text-md max-w-[400px] text-gray-200/80 items-center justify-center'>I’ve worked on tons... sooo many</span></div>
      {/* project list container */}
      <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} date={project.date}/>
        })}
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {ProjectList.map((project) => (
            <div key={project.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-black/40 hover:bg-black/90 p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="" className={project.skills === "React" || "JavaScript" ? "text-red-500" : "hidden"}>
                      {project.skills}
                    </a>
                    <FaReact className={project.skills === "React" ? "md:flex text-red-500" : "hidden"}/>
                    <SiTailwindcss className={project.skills === "TailwindCSS" ? "md:flex text-indigo-500" : "hidden"}/>
                  </p>
                  <a href="" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{project.name}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="">
                      <span className="sr-only">{project.name}</span>
                      <img className="h-10 w-10 rounded-full" src={project.image} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="" className="hover:underline">
                        {project.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={project.date}>{project.date}</time>
                      <span aria-hidden="true">-</span>
                      <span>{project.date} view on github</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=' space-y-4 text-gray-200/90 text-md'>
                <h2 className='text-sm max-w-[px] flex flex-col items-center'>
{/* Current Date Modal */}
                <span className='text-xs text-gray-400/80 bg-black/40 rounded-full p-1 mb-2 flex items-center justify-center w-[80px]'></span>
{/* Current Project */}
                <span>Currently, I’m focused on building a <span className='underline underline-offset-2 decoration-indigo-500/80'> wordle clone</span>
            <span> using: <div className='flex items-center justify-center my-1 gap-2'><FaReact className='text-sky-500 -mr-1'/> <p>React</p><SiTailwindcss className='text-sky-500 -mr-1'/><p>TailwindCSS</p></div></span></span></h2>
              
                    <a href="#" className="inline-flex items-center rounded-full bg-black/40 p-1 pr-2 m-2 text-white hover:text-gray-200 hover:bg-black/90 sm:text-base lg:text-sm xl:text-base">
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 px-3 py-0.5 text-sm font-md leading-5 text-white">
                        View on github
                      </span>
                      <span className="ml-4 text-sm"><FaGithub className='h-5 w-5 text-white '/></span>
                      <ChevronRight className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                </div>
    </div>
  )
}

export default Projects