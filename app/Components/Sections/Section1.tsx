import React from 'react'
import { hover, motion } from 'motion/react'

const Section1: React.FC<{classname: string}> = ({classname}) => {
  return (
    <section className={`${classname} h-screen w-full flex flex-col`}>
        <h1 className='text-7xl m-6'>
            <span>001 </span>
            <span>Scroll Animation</span>
        </h1>
        <div className='bg-red-300 flex-1 m-6'>
            <motion.div
                whileHover="hover"
                variants={{
                    hover: {
                        scale: 1.05,
                    },
                }} 
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                className='h-96 w-80 overflow-hidden bg-indigo-500 rounded-xl cursor-pointer text-white p-8 flex flex-col justify-between'
            >
                <span>Pro</span>
                <motion.span 
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                    className='text-6xl font-bold origin-top-left'
                >
                    $299/Month
                </motion.span>
                <span>Lorem Ipsum dolor sit amet sonsecteutur adipisicing elit.</span>
                <button className='w-full bg-white text-black font-black p-2 rounded-sm'>GET IT NOW</button>
            </motion.div>
        </div>
    </section>
  )
}

export default Section1