import React from 'react'
import Navtop from './Navtop'
import Navitems from './Navitems'
 

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#060816] p-2 w-full shadow-xl'>
        <div className='w-full flex items-center '>
        <div className='  w-[70%]'>
        <Navitems />
        </div>

       <div className=' w-[30%] flex justify-end'>
       <Navtop />
       </div>
        </div>
       
        
    </div>
  )
}

export default Navbar