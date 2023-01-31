import React from 'react'
import ProjectItems from './ProjectItems'
import BuyMeMilk from "../assets/BuyMeMilk.png"
import ChatBit from "../assets/ChatBit.png"
import MovieArt from "../assets/MovieArt.png"
import GoBlockchain from "../assets/GoBlockchain.png"


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur aliquid, vel voluptatibus earum dolore ratione minima odit, temporibus, recusandae pariatur ut maiores! Totam repellendus similique, accusantium cupiditate blanditiis ratione!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img= {BuyMeMilk} title = "BuyMeMilk App"/>
        <ProjectItems img= {GoBlockchain} title = "Personal Blockchain"/>
        <ProjectItems img= {ChatBit} title = "ChatBit App"/>
        <ProjectItems img= {MovieArt} title = "MovieArt App"/>
      </div>
    </div>
  )
}

export default Projects