
import React from 'react'
import Hero from './components/hero'
import BarGraph  from './components/barGraph'
import CoalInputForm from './components/CoalInputForm'
import WasteMangement from './components/WasteMangement'
import ReductionPathways from './components/ReductionPathways'
import LoginModal from './components/loginModal'

const App = () => {
  return (
    <div >
    <Hero/>
    <BarGraph/>
    <CoalInputForm />
    <div className='w-full h-80 bg-slate-100'>
    <WasteMangement />
    </div>
    <ReductionPathways />
    
    </div>

  )
}

export default App
