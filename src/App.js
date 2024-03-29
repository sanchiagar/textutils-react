// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

// import {
  
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //it will tell whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark mode'
      // setInterval(()=>{
      //    document.title = 'TextUtils is Amazing'
      // }, 2000)
      // setInterval(()=>{
      //    document.title = 'Install TextUtils now'
      // }, 1500)          to flash or blink the title
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      

      

      <Navbar title="TextUtilss" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
       <div className="container my-3">
         <Routes>
          <Route path="/about"
            element={<About mode={mode} />} /> 
           <Route path="/"
            element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode} />} />
          </Routes>   
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below " mode={mode} /> */}
          {/* <About/> */}
      </div>
      
       
    </>
  );
}

export default App;