import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className=' w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Deepjyoti Sarmah</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a 
            <TypeAnimation
      sequence={[
        'Blockchain Developer', 
        2000, // Waits 1s
        'Coder', 
        2000,// Waits 2s
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
    />
          </h2>
          <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaGithub className='cursor-pointer' size={20} />
            <FaLinkedin className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main