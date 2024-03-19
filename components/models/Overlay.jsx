'use client'
import { Children } from 'react'
import { motion } from 'framer-motion'
 
import { useStore } from './store'

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
  console.log(state)
  return (
    <>
      <div >
        
        
      </div>
     
      <div className="absolute top-[50%] left-[50%] w-[400px] pl-[40px]">
         
        <List open={state.open}>
          <h3>Madhuri A Poem</h3>
          <h3>- A True Story.</h3>
          <h3>
            <span className="accent"></span>
          </h3>
          <h4>Poetry</h4>
          <p className="price">₹795</p>
          <p>
               </p>
        </List>
      </div>
    </>
  )
}
