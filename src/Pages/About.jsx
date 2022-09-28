import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import ChevronRight from '@mui/icons-material/ChevronRight';
import Proj1 from "../assets/proj1.jpg"

function About() {
  return (
    <div className='flex px-8 py-8 mx-auto items-center text-gray-200/90'>
        {/* Text container */}
        <div className='text-left w-2/3'>
    {/* Header */}
    <div className='flex items-center mb-4 gap-4'>
         <div className='flex items-center justify-center'>
         <h2 className='font-extrabold text-transparent text-xl 
                  bg-clip-text bg-gradient-to-bl w-[85px] from-indigo-500 to-sky-500'>
                   About Me
                </h2>
         </div>
        <span className='bg-white/20 w-[200px] h-[1px]'></span>
    </div>
        <div className='flex gap-4 flex-col max-w-[360px] text-sm'>
        <p>
            Hello! My name is Zachary and I enjoy building things that help people.
            My interest in web development started back in 2018 when I started a digital media company — turns out hacking together wordpress themes and shopify plugins taught me a lot about the basics.
        </p>
        <p>
        Fast-forward to today, I've started to expand my knowledge beyond the basics into the realm of the advanced. I learned a lot from The Odin Project, and a bit from Zero To Mastery. Lately I'm loving tutorials on React by PedroTech!
        </p>
        <p>
        Here are a few technologies I’ve been working with recently:
        </p>
        </div>
            {/* Tech container */}
            <div className='flex justify-between mt-4 w-[360px]'>
                {/* Left */}
                <div className='flex flex-col'>
                    <div className='flex items-center text-sm'>
                        <ChevronRight className='text-indigo-500'/>
                        <p>JavaScript</p>
                    </div>
                    <div className='flex items-center text-sm'>
                        <ChevronRight className='text-indigo-500'/>
                        <p>React</p>
                    </div>
                </div>
                {/* Right */}
                <div className='flex flex-col'>
                <div className='flex items-center text-sm'>
                        <ChevronRight className='text-indigo-500'/>
                        <p>TailwindCSS</p>
                    </div>
                    <div className='flex items-center text-sm'>
                        <ChevronRight className='text-indigo-500'/>
                        <p>Next.js</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Img container */}
        <div className='flex w-1/3 items-center justify-center p-2'>
            <img src={Proj1} alt="" className='w-full h-[300px] rounded-lg shadow-lg border border-gray-200/20'/>
        </div>
    </div>
  )
}

export default About