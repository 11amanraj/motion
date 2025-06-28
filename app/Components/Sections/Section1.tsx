import React from 'react'

const Section1: React.FC<{classname: string}> = ({classname}) => {
  return (
    <section className={`${classname} h-screen w-full`}>
        <h1>
            <span>001 </span>
            <span>Scroll Animation</span>
        </h1>
    </section>
  )
}

export default Section1