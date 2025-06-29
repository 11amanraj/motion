import React from 'react'
import { motion } from 'motion/react'

const TwoDCard = () => {
    return (
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
            className='relative h-96 w-80 overflow-hidden bg-indigo-500 rounded-xl cursor-pointer text-white p-8 flex flex-col justify-between'
        >
            <span className='z-1 relative'>Pro</span>
            <motion.span 
                initial={{ scale: 0.85 }}
                variants={{
                    hover: {
                        scale: 1.1,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                className='z-1 text-6xl font-bold origin-top-left'
            >
                $299/Month
            </motion.span>
            <span className='z-1 '>Lorem Ipsum dolor sit amet sonsecteutur adipisicing elit.</span>
            <button className='z-1 w-full bg-white text-black font-black p-2 rounded-sm'>GET IT NOW</button>
            <CardBackground />
        </motion.div>
    )
}

const CardBackground = () => {
    return (
        <motion.svg 
            width="320" 
            height="384" 
            viewBox="0 0 320 384" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{
                hover: {
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut"
            }}
        >
            <motion.circle 
                cx="160.5" 
                cy="125.5" 
                r="89.5" 
                fill="black"
            />
            <motion.ellipse 
                cx="160.5" 
                cy="277.5" 
                rx="89.5" 
                ry="36.5" 
                fill="black"
            />
        </motion.svg>
    )
}

export default TwoDCard