import React from 'react'

const hero = () => {
  return (
    <div className=' w-full h-screen bg-zinc-100' >
        <div className="nav w-full h-14  flex items-center justify-between p-1 bg-slate-300" >
            <h1>Neutralizer</h1>
            <div className="middle-nav flex gap-5">
                <a href="">Home</a>
                <a href="./CoalInputForm.jsx">Emission Calculator</a>
                <a href="">Waste Management</a>
                <a href="">Reduction Pathways</a>
                <a href="">About</a> 
            </div>
            <button className='w-fit bg-zinc-600 text-white p-1 rounded-md '>Per Capita Emission</button>
        </div>
        <div className="page1 w-full h-screen realative p-2">
            <h1 className='absolute text-7xl text-zinc-200 top-28 ml-2'>Calculate the Emissions of carbon from Mining</h1>
            <p className='absolute top-1/2 text-white text-sm w-96 ml-2'>The mining industry is responsible for significant carbon emissions, particularly from
            methane (CH4), carbon dioxide (CO2), and nitrous oxide (NO2). Monitoring and managing these
            emissions is critical for reducing the environmental impact and achieving sustainability goals.</p>
            <img className='w-full h-full object-cover rounded-md' src="https://images.unsplash.com/photo-1725663656850-7bc515816fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

    </div>
  )
}

export default hero
