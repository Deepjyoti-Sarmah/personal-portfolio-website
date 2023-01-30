import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet qui, voluptatum magnam consectetur fuga eaque quibusdam molestiae quae ducimus debitis labore commodi eligendi necessitatibus architecto amet aspernatur vero? Neque.",
    },
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet qui, voluptatum magnam consectetur fuga eaque quibusdam molestiae quae ducimus debitis labore commodi eligendi necessitatibus architecto amet aspernatur vero? Neque.",
    }, 
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet qui, voluptatum magnam consectetur fuga eaque quibusdam molestiae quae ducimus debitis labore commodi eligendi necessitatibus architecto amet aspernatur vero? Neque.",
    },
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 Years",
        details :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet qui, voluptatum magnam consectetur fuga eaque quibusdam molestiae quae ducimus debitis labore commodi eligendi necessitatibus architecto amet aspernatur vero? Neque.",
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((items, idx) => {
                <WorkItem key={idx}
                year = {items.year}
                title = {items.title}
                duration = {items.duration}
                details = {items.details}
                />
            })
        }
    </div>
  )
}

export default Work