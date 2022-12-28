import React from 'react'

const Stack = () => {
  return (
    <div className='w-[450px] mx-auto text-white'>
        <h1 className='text-white text-xl mt-4'>
            📚stack
        </h1>

        <div className='mt-3 flex justify-between'>
            <div className='flex'>
                <p className='font-bold w-[75px] text-center'>language</p>
                <p className='ml-5'>Javascript | Python | Pwshell | C# | Typescript</p>
            </div>
            
        </div>

        <div className='mt-3 flex justify-between'>
            <div className='flex'>
            <p className='font-bold w-[75px] text-center'>fontend</p>
            <p className='ml-5'>React | TailwindCSS | ChakraUI</p>
            </div>
        </div>

        <div className='mt-3 flex justify-between'>
            <div className='flex'>
            <p className='font-bold w-[75px] text-center'>backend</p>
            <p className='ml-5'>NodeJS | ExpressJS</p>
            </div>
        </div>
        
        <div className='mt-3 flex justify-between'>
            <div className='flex'>
                <p className='font-bold w-[75px] text-center'>database</p>
                <p className='ml-5'>Firebase | MongoDB</p>
            </div>
        </div>
        <br />
    </div>

  )
}

export default Stack