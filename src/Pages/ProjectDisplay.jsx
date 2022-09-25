import React from 'react'
import { useParams } from 'react-router-dom'
import {ProjectList} from '../helpers/ProjectList'
import GitHub from '@mui/icons-material/GitHub';

function ProjectDisplay() {

    const { id } = useParams();
    const project = ProjectList[id];

  return (
    <div className='text-white items-center justify-center flex flex-col'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <GitHub />
        <h1>Skills Used: {project.skills}</h1>
    </div>
  )
}

export default ProjectDisplay