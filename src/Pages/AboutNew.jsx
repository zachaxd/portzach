import React from 'react'
import Mesh25 from "../assets/Mesh 25.jpg"

export default function AboutNew() {
    return (
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <img src={Mesh25} className="h-32 w-full rounded-lg shadow-md sm:w-32 relative" alt="" />
        </div>
        <div className='text-white/80 text-xs'>
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
            quidem ipsam quia iusto.
          </p>
        </div>
      </div>
    )
  }