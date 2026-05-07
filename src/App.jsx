
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar  from './components/Navbar'
import { Programes } from "./pages/Programes";
import { Planning } from "./pages/Planning";

function App() {

  return (
    <>
      

    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/programmes" element={<Programes/>}/>
        <Route path="/planning" element={<Planning/>}/>
        
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
