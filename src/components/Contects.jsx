import React from 'react'

const Contects = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='https://getform.io/f/4c56bfe9-2321-4702-85c2-3a2b1486fa88' method='POST' encType='multipart/form-data' >
            <div className=' w-full py-2'>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py' htmlFor="">Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" id="" />
                </div>
                {/* <div className='flex flex-col'>
                    <label htmlFor="">Phone </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                </div> */}
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py' htmlFor="">Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py' htmlFor="">Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py' htmlFor="">Messgae</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} name="message"></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'> Send Message</button>
        </form>
    </div>
  )
}

export default Contects