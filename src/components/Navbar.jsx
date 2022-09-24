import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='flex fixed justify-center items-center w-full h-[60px] px-4 text-sm backdrop-blur-xl border-b-2 border-gray-200'>
        {/* toggle button */}
        <div>
            <button className='md:hidden absolute z-10'
            onClick={handleClick}>
                {!nav ? <MenuIcon /> : <CloseIcon />}
            </button>
        </div>
        {/* links */}
        <div className='hidden md:flex space-x-6'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        </div>
        {/* mobile menu */}
       <div className={!nav ? 'hidden' : 'absolute top-0 right-0 shadow-md h-screen w-3/4 backdrop-blur-xl bg-gray-100 border-l-2 border-gray-200 text-gray-700 divide-y divide-slate-400 flex flex-col p-4 text-2xl items-center justify-center'}>
       <Link to="/" className='w-full p-4 rounded hover:bg-gray-200'>Home</Link>
        <Link to="/projects" className='w-full p-4 rounded hover:bg-gray-200'>Projects</Link>
        <Link to="/experience" className='w-full p-4 rounded hover:bg-gray-200'>Experience</Link>
       </div>
    </div>
  )
}

export default Navbar