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
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img= {BuyMeMilk} title = "BuyMeMilk App" tech = "React, Hardhar, Solidity" link = "https://buymemilk.netlify.app/"/>
        <ProjectItems img= {GoBlockchain} title = "Go Blockchain" tech= "Go, Mux" link = "https://github.com/Deepjyoti-Sarmah/Blockchain-with-go"/>
        <ProjectItems img= {ChatBit} title = "ChatBit App" tech= "React, Tailwind, OpenAI" link = "https://codebit.vercel.app/"/>
        <ProjectItems img= {MovieArt} title = "MovieArt App" tech= "JavaScript, MongoDB" link = "https://github.com/Deepjyoti-Sarmah/Movie-Art" />
      </div>
    </div>
  )
}

export default Projects