import { GlobeDemo } from '@/components/GlobeDemo'
import React from 'react'
import { ContactFo } from './ContactFo'

const Over = () => {
  return (
    <div className='w-full h-full bg-black flex items-center justify-center '>
        <div className='flex-1 flex items-center justify-center w-full h-full'>
             <ContactFo />
        </div>
          <div className='flex-1 flex items-center justify-center w-full h-full'>
          <GlobeDemo />
          </div>
      
    </div>
  )
}

export default Over