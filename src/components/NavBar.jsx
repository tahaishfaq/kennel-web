import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 z-[10000]">
        <div className="text-white text-2xl font-bold">Logo</div>
       <div className='flex items-center gap-x-3'>
        <span className='text-white'>
            Home
        </span>
       </div>
        <button className="bg-white text-black px-4 py-2 rounded">Request sent</button>
      </nav>
  )
}

export default NavBar