import React from 'react'
import ProjectItems from './ProjectItems'
import BuyMeMilk from "../assets/BuyMeMilk.png"
import ChatBit from "../assets/ChatBit.png"
import MovieArt from "../assets/MovieArt.png"
import GoBlockchain from "../assets/GoBlockchain.png"
import Web3Storage from "../assets/Web3Storage.png"
import AiArtGasslessNFT from "../assets/AIArtGasslessNFT.png"
import SolanaAirdrop from "../assets/SolanaAirdrop.png"



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={BuyMeMilk} title="BuyMeMilk App" tech="React, Hardhart, Solidity" link="https://buymemilk.netlify.app/" />
        <ProjectItems img={Web3Storage} title="File Store Web3" tech="React, Solidity, NFT.store" link="https://web3-storage-dapp.vercel.app/" />
        <ProjectItems img={AiArtGasslessNFT} title="AI NFT Gassless " tech="React, Stable Diffusion, NFT.port" link="https://ainftgassless.vercel.app/" />
        <ProjectItems img={SolanaAirdrop} title="Solana Airdrop App" tech="React, Solana/Web3.js" link="https://solana-airdrop-three.vercel.app/" />
        <ProjectItems img={GoBlockchain} title="Go Blockchain" tech="Go, Mux" link="https://github.com/Deepjyoti-Sarmah/Blockchain-with-go" />
        <ProjectItems img={ChatBit} title="ChatBit App" tech="React, Tailwind, OpenAI" link="https://codebit.vercel.app/" />
        <ProjectItems img={MovieArt} title="MovieArt App" tech="JavaScript, MongoDB" link="https://github.com/Deepjyoti-Sarmah/Movie-Art" />
      </div>
    </div>
  )
}

export default Projects