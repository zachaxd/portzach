import React from 'react'
import ProjectItem from '../components/ProjectItem'

import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='bg-zinc-900 w-full p-8 items-center flex-col justify-center flex text-gray-200'>
      <div className='mb-8 p-8'><h1 className='text-4xl font-bold mb-6 max-h-[20px]'>Things I’ve made</h1>
      <span className='text-md max-w-[400px] text-gray-200/80 items-center justify-center'>I’ve worked on tons... sooo many</span></div>
      {/* project list container */}
      <div className='inline-grid md:grid-cols-3 gap-8 '>
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} date={project.date}/>
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
                    <a href="" className="hover:underline">
                      {project.skills}
                    </a>
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
    </div>
  )
}

export default Projects