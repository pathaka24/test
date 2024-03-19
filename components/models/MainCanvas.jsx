import React from 'react'
import Modelcaintainer from './Modelcaintainer'
import { Overlay } from './Overlay'

const MainCanvas = () => {
  return (
    <div className='w-full h-screen'>
        <Modelcaintainer />
        <Overlay />
    </div>
  )
}

export default MainCanvas