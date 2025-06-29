import React from 'react'
import { motion } from 'motion/react'

const FormStep = () => {
  return (
    <motion.div 
        className='w-16 h-16 bg-blue-200 rounded-full flex justify-center items-center'
        variants={{
            start: { rotate: 0 },
            finish: { rotate: 360 }
        }}
        initial='start'
        animate='finish'
        transition={{ duration: 2, repeat: Infinity }}
    >
        <div className='w-12 h-12 bg-blue-700 rounded-full flex justify-center items-center'>
            <span >1</span>
            <span className='hidden'>2</span>
        </div>
    </motion.div>
  )
}

export default FormStep