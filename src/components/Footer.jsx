import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='flex w-full flex-col border-t-2 border-gray-200 items-center gap-2 justify-center p-6 fixed bottom-0 text-white bg-zinc-900'>
        <div className='gap-2 flex'>
        <a href="https://linkedin.com/in/zachand9" className=' hover:text-sky-200 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><LinkedInIcon /></a>
        <a href="mailto:zachand9@gmail.com" className=' hover:text-sky-200 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><EmailIcon /></a>
        <a href="https://github.com/zachaxd" className=' hover:text-sky-200 duration-150 hover:-translate-y-0.5 hover:shadow-lg'><GitHubIcon /></a>
        </div>
        <p>&copy; 2022 zacha.me</p>
    </div>
  )
}

export default Footer