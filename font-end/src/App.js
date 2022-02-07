import './App.css';
import React from 'react';
import Home from './pages/Home';
import Tool from './pages/Tool1';

import { Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tool">Tool</Link>
          </li>
        </ul>
      </header>      
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/tool" element={<Tool />}/>
      </Routes>
    </div>
  );
}
export default App;

