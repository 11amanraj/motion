import React from 'react'
import FormStep from '../Form/FormStep'

const FormSection = () => {
  return (
    <section className='bg-gray-700 min-h-screen w-full flex flex-col'>
        <h1 className='text-7xl m-6 font-mono font-bold'>
            <span>004 </span>
            <span>Form Animation</span>
        </h1>
        <div className='bg-red-300 flex-1 m-6 flex gap-12 justify-center items-center'>
            <span>
              Lorem Ipsum
            </span>
            <FormStep />
        </div>
    </section>
  )
}

export default FormSection