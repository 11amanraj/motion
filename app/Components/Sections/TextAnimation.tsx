import React from 'react'
import TextFlicker from '../TextFlicker'

const TextAnimation = () => {
  return (
    <section className='bg-yellow-300 min-h-screen w-full flex flex-col'>
        <h1 className='text-7xl m-6 font-mono font-bold'>
            <span>003 </span>
            <span>Text Animation</span>
        </h1>
        <div className='bg-red-300 flex-1 m-6 flex flex-col gap-12 justify-center items-start'>
            <TextFlicker>Twitter</TextFlicker>
            <TextFlicker>Facebook</TextFlicker>
            <TextFlicker>Linkedin</TextFlicker>
            <TextFlicker>Stegosauraus</TextFlicker>
        </div>
    </section>
  )
}

export default TextAnimation