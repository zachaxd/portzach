import React from 'react'
import ChevronRight from '@mui/icons-material/ChevronRight';
import {useNavigate} from 'react-router-dom'

function ProjectItem({image, name, date, id}) {
  const navigate = useNavigate();
  return (
    <div className=''>
        <div style={{backgroundImage: `url(${image})`}} className='p-32 rounded-lg max-h-[200px] border-gray-400/40 border-2 bgImage'
        onClick={() => {
          navigate("/project/" + id);
        }}/>
        <h1 className='mt-2 font-bold text-2xl'>{name}</h1>
        <a href="#" className="inline-flex items-center rounded-full bg-black/40 p-1 pr-2 m-2 text-white hover:text-gray-200 hover:bg-black/90 sm:text-base lg:text-sm xl:text-base">
                      <span className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 px-3 py-0.5 text-sm font-md leading-5 text-white">
                       View on Github
                      </span>
                      <span className="ml-4 text-sm">Last Updated: {date} </span>
                      <ChevronRight className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
    </div>
  )
}

export default ProjectItem