import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='flex w-full h-4 flex-col border-t-2 border-gray-800/40 items-center gap-2 justify-center p-12 bottom-0 text-white bg-zinc-900'>
          <div className='gap-2 flex items-center justify-center'>
        <a href="https://linkedin.com/in/zachand9" className=' hover:text-indigo-500 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><LinkedInIcon /></a>
        <a href="mailto:zachand9@gmail.com" className=' hover:text-indigo-500 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><EmailIcon /></a>
        <a href="https://github.com/zachaxd" className=' hover:text-indigo-500 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><GitHubIcon /></a>
        </div>
        <p className='text-gray-500 text-xs'>&copy; 2022 zacha.me</p>
    </div>
  )
}

export default Footer