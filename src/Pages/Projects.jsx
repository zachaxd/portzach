import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/proj1.jpg'
import Proj2 from '../assets/proj3.webp'

import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='bg-zinc-900 w-full p-8 min-h-screen items-center flex-col justify-center flex text-gray-200'>
      <h1 className='text-4xl mb-8 '>My Recent Projects</h1>
      {/* project list container */}
      <div className='inline-grid grid-cols-3 gap-4'>
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects