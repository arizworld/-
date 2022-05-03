import React from 'react'
import { useState } from 'react';
import '../App.css';
import About from '../components/About';
import Navbar from '../components/Navbar';
import TextArea from '../components/TextArea';
import Alert from '../components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function Views() {
    const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (msg,type)=>{
      setAlert({
        msg : msg,
        type : type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      // Dark Mode is Enabled Now
      setMode('dark');
      document.body.style.backgroundColor = '#02022e';
      document.body.style.color = '#white';
      // show alert
      showAlert("Dark Mode is Enabled Now","success");
    }else{
      // Light Mode is Enabled Now
      setMode('light');
      document.body.style.backgroundColor = '#b2bdc2';
      document.body.style.color = 'black';
      showAlert("Light Mode is Enabled Now","success");

    }
  }
  return (
    <Router>
    <Navbar name="ArizWorld" toggleMode={toggleMode} mode = {mode}/>
    <Alert alert={alert} />
    <Routes>
      <Route index element={<TextArea  showAlert={showAlert} toggleMode={toggleMode} mode = {mode} />} />
      <Route exact path="/about" element={<About toggleMode={toggleMode} mode = {mode} />}/>
      <Route path="*" element={<div className='text-center'> 404 not found ~</div>} />
    </Routes>
  </Router>
  )
}
