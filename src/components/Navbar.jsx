import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
import { RxCode } from "react-icons/rx";

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handlerNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-15 max-w-[550px] mx-auto px-4 '>
        <h1 className='w-full text-xl font-bold cursor-pointer flex'>
            <RxCode className='mt-[3px] mr-1' size={25}/> WhileDev
        </h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer' >Blog</li>
            
            <a href="https://whilelinkinbio.vercel.app/">
                <li className='p-4 cursor-pointer'>Contract</li>
            </a>
            <a href="https://github.com/CinnamonRolly">
                <li className='p-4 flex cursor-pointer'> <FaGithub className='mt-1 mr-1'/>GitHub </li>
            </a>
            
        </ul>
        {/* Mobile Navbar */}
            
        <div onClick={handlerNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose className='mt-3' size={20}/> :  <AiOutlineMenu className='border w-9 h-9 p-2 mt-3 rounded-md hover:bg-[#101012]'/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r border-r-[#101012] h-full ease-in-out duration-500 bg-[#202023]' : 'fixed left-[-100%]'}>
            <ul className='p-4'>
                <h1 className='text-xl font-bold cursor-pointer flex m-3 '>
                    <RxCode className='mt-[3px] mr-1' size={25}/> WhileDev
                </h1>
                <li className='p-4 border-b border-gray-500 cursor-pointer'>Blog</li>
                <a href="https://while-linkin-bio.vercel.app">
                    <li className='p-4 border-b border-gray-500 cursor-pointer'>Contract</li>
                </a>
                <a href="https://github.com/CinnamonRolly">
                    <li className='p-4 flex cursor-pointer'> <FaGithub className='mt-1 mr-1'/>GitHub </li>
                </a>
                
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar