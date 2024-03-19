'use client'

import React from 'react'
import { Navside } from './Navside'
import Cart from './Cart'

const Navtop = () => {
  return (
    <div className='flex mr-4 gap-8'>
        <Cart />
        <Navside />
    </div>
  )
}

export default Navtop