import React from 'react'
// import './Landing.css';
import { motion,  AnimatePresence } from 'framer-motion'

export const Landing = ({ landing, setLanding }) => {

  const landingVariant ={
    hidden: { opacity: 0},
    visible: { opacity: 1}
  }
  return (
    <AnimatePresence exitBeforeEnter>
        { landing && (
          <motion.div className='landing'
          variants={landingVariant}  
          initial='hidden'
          animate='viisible'
        >
Landing
          </motion.div>
        )}
    </AnimatePresence>
  
  )
}
