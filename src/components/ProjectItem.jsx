import React from 'react'

function ProjectItem({image, name}) {
  return (
    <div className=''>
        <div style={{backgroundImage: `url(${image})`}} className='p-32 rounded-lg max-h-[200px] border-indigo-500 border-2 shadow-lg'/>
        <h1 className='mt-2 font-bold text-2xl'>{name}</h1>
    </div>
  )
}

export default ProjectItem