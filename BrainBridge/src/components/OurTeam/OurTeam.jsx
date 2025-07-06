import React from 'react'
import ChromaGrid from '../courses/carousel'

function OurTeam() {
    return (
        
        <div className='py-20 bg-transparent dark:bg-black'>
           <h1 className="text-4xl md:text-5xl text-center font-extrabold mb-6 leading-tight
                text-[#0ff] hover:text-[#f0f] 
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:drop-shadow-[0_0_10px_#0ff]">
  TEAM <span className="text-[#f0f] hover:text-[#0ff] transition-colors duration-300">JRP10</span>
</h1>


        <ChromaGrid/>
        </div>
       

    )
}

export default OurTeam
