import { Route, Routes } from 'react-router-dom';
import Hero from '../components/hero';
// import BarGraph from './components/barGraph';
import CoalInputForm from '../components/CoalInputForm';
import WasteMangement from '../components/WasteMangement';
import ReductionPathways from '../components/ReductionPathways';
import LoginModal from '../components/loginModal';
import PerCapita from '../components/PerCapita'


const Routing = () => {
  return (
  
        <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="/CoalInput" element={<CoalInputForm/>} />
        <Route path="/WasteManagement" element={<WasteMangement />} />
        <Route path="/ReductionPathways" element={<ReductionPathways />} />
        <Route path="LogIn" element={< LoginModal/>} />
        <Route path="PerCapita" element={< PerCapita/>}/>
        

      </Routes>
      
   
  )
}

export default Routing
