import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

// import { Routes, Route } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  // Alert :
  const [alert, setAlert] = useState();
  const showAlert=(messege, type)=>{
    setAlert({
      messege: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }




  const [mode, setDarkMode]= useState("light");
  const ToggleMode =()=>{
  if (mode==="light") {
    setDarkMode("dark")
    document.body.style.backgroundColor='#232642'
    showAlert(" Dark Mode Has Been Enable!","success")
  }
  else{
    setDarkMode("light")
    document.body.style.backgroundColor='white'
    showAlert(" Light Mode Has Been Enable!","success")
  }
  }





  return (
    <>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode}/>
      
    <div className="container">
        <TextForm alert={alert} showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
      </div>
      {/* <Routes>    
      <Route path="about" element={<About />} />
      </Routes> */}
      {/* <div className="container">
        <TextForm alert={alert} showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
      </div> */}
      
    </>
    );
}

export default App;
