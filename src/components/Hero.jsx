import React from 'react'
import WhileDev from '../assets/WhileDev.png'

const Hero = () => {
  return (
    <div className='w-[450px] mx-auto h-full'>
        <img src={WhileDev}  className='w-[450px] mx-auto m-5 rounded-[15px]' /> 
        <div className='text-white mt-7 w-full text-center h-12 mx-auto bg-[#313134] rounded-lg'>
            <p className='pt-3'>Hi! I'm a Software Engineer based in Thailand!</p>
        </div>
    </div>
  )
}

export default Hero