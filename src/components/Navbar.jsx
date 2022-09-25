import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='inline-flex justify-between items-center rounded-full bg-black/40 px-6 py-1 text-sm m-4 text-white border-b-2 border-gray-800/40'>
        {/* links */}
          <ul className='hidden md:flex space-x-6'>
        <Link to="/" className='hover:text-indigo-500 hover:-mb-2 hover:border-b-2 border-slate-500/90'>Home</Link>
        <Link to="/projects" className='hover:text-indigo-500 hover:-mb-2 hover:border-b-2 border-slate-500/90'>Projects</Link>
        <Link to="/experience" className='hover:text-indigo-500 hover:-mb-2 hover:border-b-2 border-slate-500/90'>Experience</Link>
        </ul>
        {/* toggle button */}
        <div>
            <button className='md:hidden relative z-10'
            onClick={handleClick}>
                {!nav ? <MenuIcon /> : <CloseIcon />}
            </button>
        </div>
        {/* mobile menu */}
       <div className={!nav ? 'hidden' : 'absolute top-0 right-0 shadow-md h-screen w-3/4 backdrop-blur-xl bg-gray-100 border-l-2 border-gray-200 text-gray-700 divide-y divide-slate-400 flex flex-col p-4 text-2xl items-center justify-center'}>
       <Link to="/" className='w-full p-4 rounded hover:bg-gray-200'>Home</Link>
        <Link to="/projects" className='w-full p-4 rounded hover:bg-gray-200'>Projects</Link>
        <Link to="/experience" className='w-full p-4 rounded hover:bg-gray-200'>Experience</Link>
       </div>
       <button><BsFillMoonStarsFill className='text-white w-5 h-5'/></button>
    </div>
  )
}

export default Navbar