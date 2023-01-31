import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 text-center'>
        <p className='text-sm mt-2 opacity-60'>
            &copy; {new Date().getFullYear()} Deepjyoti Sarmah. All rights reserved
        </p>
    </div>
  )
}

export default Footer