// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';


// import React,{ useState } from 'react';
// Routing hide to serve on Git
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
 const [mode, setMode] = useState('light'); 
 const [alert,setAlert] = useState(null);

 const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(()=>{
    setAlert(null);
  },1500)

 }

 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    // document.title ='TextUtils'- 'light Mode';
   

  }
  else{
    setMode('dark');
    document.body.style.backgroundColor = 'light';
    showAlert("Light mode has been enabled","success");
    // document.title ='TextUtils'- 'Dark Mode';
  
  

  }
  
 }
  return(
    <>
   
    {/* <Navbar title="Textutils"aboutText="About Textutils"/> */}
    {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes> */}
            {/* <Route exact */}
              {/* path="/" */}
              {/* element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* // </BrowserRouter> */}
   
   
    
    </>
    
    
  ); 
}

export default App;
