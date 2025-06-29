import React from 'react'
import { motion } from 'motion/react'

const FormStep = () => {
  return (
    <motion.div 
        className='w-16 h-16 rounded-full flex justify-center items-center'
        variants={{
            start: { rotate: 0, backgroundColor: 'rgba(0, 0, 0, 0)' },
            finish: { rotate: 360, backgroundColor: 'rgba(191, 219, 254, 1)' }
        }}
        initial='start'
        animate='finish'
        transition={{ duration: 2, repeat: Infinity }}
    >
        <motion.div 
            className='w-12 h-12 border-2 rounded-full flex justify-center items-center'
            variants={{
                start: { backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(237, 237, 237, 1)' },
                finish: { backgroundColor: 'rgba(29, 78, 216, 1)', borderColor: 'rgba(29, 78, 216, 1)' }
            }}
            initial='start'
            animate='finish'
            transition={{ duration: 2 }}
        >
            <span >1</span>
            <span className='hidden'>2</span>
        </motion.div>
    </motion.div>
  )
}

export default FormStep