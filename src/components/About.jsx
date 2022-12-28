import React from 'react'
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className='w-[450px] mx-auto text-white'>
        <h1 className='text-white text-xl'>
            🚀about
        </h1>
        <p>
        <p className='ml-5'>While is a software engineer based in Thailand Area. He is</p>
        passionate about full stack application development because of the diversity of tech he gets 
        to learn and code.
        </p>
        
        <div>
            <a href="https://github.com/CinnamonRolly">
                <button class="bg-[#4a4750] hover:bg-[#FEB2B2] text-white mx-auto flex font-bold py-2 px-4 rounded mt-5">
                    <FaGithub className='mt-1 mr-1'/>GitHub 
                </button>
            </a>
        </div>

        {/*Bio*/}
        <h1 className='text-white text-xl mt-4'>
            🌎bio
        </h1>

        <div className='mt-3 flex justify-between'>
            <div>
                <p className='font-bold bg-[#4a4750] w-[50px] text-center rounded-lg'>2019</p>
            </div>
            <p>Opened window terminal and want to learn coding.</p>
        </div>

        <div className='mt-3 flex justify-between'>
            <div>
                <p className='font-bold bg-[#6D6875] w-[50px] text-center rounded-lg'>2020</p>
            </div>
            <p>Tried code academy about front-end development.</p>
        </div>

        <div className='mt-3 flex justify-between'>
            <div>
                <p className='font-bold bg-[#E5989B] w-[50px] text-center rounded-lg mr-10'>2021</p>
            </div>
            <p className=''>Start learning back-end development and becoming full-stack developer.</p>
        </div>
        
        <div className='mt-3 flex justify-between'>
            <div>
                <p className='font-bold bg-[#FFB4A2] w-[50px] text-center rounded-lg'>2022</p>
            </div>
            <p>Creating own first tech start called Protox for noting</p>
        </div>
        <br />
        <br />
        <br />

    </div>
  )
}

export default About