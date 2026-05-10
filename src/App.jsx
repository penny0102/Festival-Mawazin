import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Programes } from "./pages/Programes";
import { Planning } from "./pages/Planning";
import {Passeport} from './pages/Passeport'
import Login from "./pages/Login";
import Register from './pages/register'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programes />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/passeport" element={<Passeport/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
