import React from 'react'
import TwoDCard from '../Cards/TwoDCard';
import ThreeDCard from '../Cards/ThreeDCard';

const CardsSection: React.FC<{classname: string}> = ({classname}) => {
  return (
    <section className={`${classname} h-screen w-full flex flex-col`}>
        <h1 className='text-7xl m-6'>
            <span>001 </span>
            <span>Cards Animation</span>
        </h1>
        <div className='bg-red-300 flex-1 m-6 flex gap-12 justify-center items-center'>
            <TwoDCard />
            <ThreeDCard />
        </div>
    </section>
  )
}

export default CardsSection