import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#495057'
  }else{
    setMode('light')
    document.body.style.backgroundColor='#fff'
  }
}
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/"  element={<TextForm heading="Enter the text to anlayze below" mode={mode}/>}>
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes>
    </div>
    </Router>
  
    </>
  );
}

export default App;
