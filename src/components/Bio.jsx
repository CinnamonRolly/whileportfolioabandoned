import React from 'react'
import WhilePFP from '../assets/WhilePFP.jpg'

const Info = () => {
  return (
    <div className='max-w-[450px] mx-auto h-full mt-10'>
        <div className=' text-white'>
            <h1 className='text-3xl font-bold'>Jiranthanin Horpanich</h1>
            <p className=''>While (Developer/Student)</p>
            <img src={WhilePFP} className='w-[100px] border-2 rounded-[100%] mx-auto mt-2' />

        </div>
    </div>
  )
}

export default Info