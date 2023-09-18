import logo from './logo.svg';
import './App.css';
import  Login from '../src/component/Login';
import Reg from '../src/component/Reg';
import Log from '../src/component/Log';
import Geo from '../src/component/Geo'; // Ensure the path is correct
import Userdash from './component/Userdash';
import Notes from './component/Notes';
import Camera from './component/Camera';




import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/login" element={<Log />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/userdash" element={<Userdash />} />
        <Route path="/notes" element={<Notes />} />
        <Route path='/camera'element={<Camera/>} />
       

      

        
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
