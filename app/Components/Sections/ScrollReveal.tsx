import React from 'react'
import Loading from '../Loading'

const ScrollReveal = () => {
  return (
    <section className='bg-green-400 min-h-screen w-full flex flex-col'>
        <h1 className='text-7xl m-6 font-mono font-bold'>
            <Loading>
                <span>002 </span>
                <span>Scroll Reveal</span>
            </Loading>
        </h1>
        <div className='bg-red-300 flex-1 m-6 flex flex-col gap-12 justify-center items-center'>
            <h2 className='text-[120px]'>
                <Loading>
                    Lorem Ipsum
                </Loading>
            </h2>
            <div className='text-6xl'>
                <Loading>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </Loading>
            </div>
            <div className='text-2xl'>
                <Loading>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </Loading>
            </div>
        </div>
    </section>
  )
}

export default ScrollReveal