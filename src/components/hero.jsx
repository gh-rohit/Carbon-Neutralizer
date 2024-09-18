import React from 'react'
import Graph from './Graph'

const hero = () => {
  return (
    <div className=' w-full h-screen bg-zinc-100 ' >
        <Graph/>
       
        <div 
         style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         className="page1 w-full h-screen realative p-2 ">
            <h1 className=' text-7xl text-black mt-10  ml-2'>Calculate the Emissions of carbon from Mining</h1>
            <p className=' mt-16 text-white text-sm w-96 ml-2'>The mining industry is responsible for significant carbon emissions, particularly from
            methane (CH4), carbon dioxide (CO2), and nitrous oxide (NO2). Monitoring and managing these
            emissions is critical for reducing the environmental impact and achieving sustainability goals.</p>
            {/* <img className='w-full h-full object-cover rounded-md' src="https://images.unsplash.com/photo-1725663656850-7bc515816fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        </div>

    </div>
  )
}

export default hero
