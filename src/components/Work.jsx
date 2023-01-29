import React from 'react'
import WorkItem from './workItem.jsx'

const data = [
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 years',
        details:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, unde. Numquam illo repudiandae quisquam qui nemo molestias, excepturi facere voluptate, quos reiciendis fugit dolor autem enim modi rerum est error.'
    },
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 years',
        details:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, unde. Numquam illo repudiandae quisquam qui nemo molestias, excepturi facere voluptate, quos reiciendis fugit dolor autem enim modi rerum est error.'
    },
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 years',
        details:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, unde. Numquam illo repudiandae quisquam qui nemo molestias, excepturi facere voluptate, quos reiciendis fugit dolor autem enim modi rerum est error.'
    },
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 years',
        details:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, unde. Numquam illo repudiandae quisquam qui nemo molestias, excepturi facere voluptate, quos reiciendis fugit dolor autem enim modi rerum est error.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((item, idx) => {
                <WorkItem 
                    key = {idx}
                    year= {item.year}
                    title = {item.title} 
                    duration = {item.duration} 
                    details = {item.details}
                />
            })
        }
    </div>
  )
}

export default Work