import React from 'react'
import ProjectItem from '../components/ProjectItem'

import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='bg-zinc-900 w-full p-8 min-h-screen items-center flex-col justify-center flex text-gray-200'>
      <h1 className='text-4xl mb-8 '>My Recent Projects</h1>
      {/* project list container */}
      <div className='inline-grid md:grid-cols-3 gap-8 '>
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} date={project.date}/>
        })}
      </div>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 text-white xl:gap-x-8">
      {ProjectList.map((project) => (
        <li key={project.name} className="relative">
          <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={project.image} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {project.name}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{project.name}</p>        
          </li>
      ))}
    </ul>
    </div>
  )
}

export default Projects