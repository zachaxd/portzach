import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <div className='flex justify-between px-12 py-2 items-center m-4'>
        {/* links */}
          <ul className='hidden md:flex block transition rounded-full bg-white/90 px-4 py-2 gap-6 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
        <li><NavLink exact to="/" className={splitLocation[1] === "" ? "text-indigo-500" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={splitLocation[1] === "about" ? "text-indigo-500" : ""}>About</NavLink></li>
        <li><NavLink to="/projects" className={splitLocation[1] === "projects" ? "text-indigo-500" : ""}>Projects</NavLink></li>
        <li><NavLink to="/experience" className={splitLocation[1] === "experience" ? "text-indigo-500" : ""}>Experience</NavLink></li>
        </ul>
        {/* toggle button */}
        <div>
            <button className='md:hidden relative z-10'
            onClick={handleClick}>
                {!nav ? <MenuIcon /> : <CloseIcon />}
            </button>
        </div>
        {/* mobile menu */}
       
       <a href="" className='hidden md:flex rounded-full hover:bg-white/20 hover:ring-zinc-900 bg-white/90 px-4 py-2 gap-6 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
        <BsFillMoonStarsFill className='text-white w-4 h-4'/></a>

       <div className={!nav ? 'hidden' : 'absolute top-0 right-0 shadow-md h-screen w-3/4 backdrop-blur-xl bg-gray-100 border-l-2 border-gray-200 text-gray-700 divide-y divide-slate-400 flex flex-col p-4 text-2xl items-center justify-center'}>
       <NavLink to="/" className='w-full p-4 rounded hover:bg-gray-200'>Home</NavLink>
        <NavLink to="/projects" className='w-full p-4 rounded hover:bg-gray-200'>Projects</NavLink>
        <NavLink to="/experience" className='w-full p-4 rounded hover:bg-gray-200'>Experience</NavLink>
       </div>
    </div>
  )
}

export default Navbar