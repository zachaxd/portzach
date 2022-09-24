import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div className='flex text-gray-100 items-center justify-start w-full h-96 p-4 bg-zinc-900'>
      {/* about */}
      <div className='flex flex-col text-left mx-auto'>
        <div className='w-2/3'>
        <h1 className='text-4xl'>Hello, my name is 
        <span className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 duration-150 hover:translate-x-2'> Zach</span></h1>
      </div>
      <p className='text-xs mb-2 text-zinc-300'>Nice to meet you.</p>
      <p className='text-xs'>I'm a front end developer with experience in React, Javascript and much more!</p>
      <div className='gap-1 mt-2 flex'>
        <LinkedInIcon />
        <GitHubIcon />
      </div>
</div>
    </div>
  )
}

export default Home