import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ThreeDCard = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    };

    const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    };
    
    return (
       <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className='relative h-96 w-80 overflow-hidden bg-indigo-500 rounded-xl cursor-pointer text-white p-8 flex flex-col justify-between'
        >
            <motion.span
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className='z-1 relative'>Pro</motion.span>
            <motion.span
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }} 
                className='z-1 text-6xl font-bold origin-top-left'>
                $299/Month
            </motion.span>
            <motion.span
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }} 
                className='z-1 '>Lorem Ipsum dolor sit amet sonsecteutur adipisicing elit.</motion.span>
            <motion.button
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }} 
                className='z-1 w-full bg-white text-black font-black p-2 rounded-sm'>GET IT NOW</motion.button>
        </motion.div> 
    )
}

export default ThreeDCard