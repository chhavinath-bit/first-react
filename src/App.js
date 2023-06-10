// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

// import {Header} from './myComponents/header';
// import Footer from './myComponents/footer';
import Footer from './myComponents/Footer';
import Navigation from './myComponents/calculator';
import About from './myComponents/About';
import ColorWheel from './myComponents/ColorWheel';
function App() {
  // let c="hello";
  function changeMode(){
   if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#131921";
   }
   else{
    setMode("light");
    document.body.style.backgroundColor="white";
   }
  }
  const [mode, setMode]= useState("light");
  return (
    <>
    
   <Navigation title="our first react" about="About" mode={mode} changeMode={changeMode}/>
   <div className="container my-5">
   <Footer heading="Enter your text to analyze" mode={mode}/>
   {/* <About /> */}
   </div>
   <ColorWheel />
   </>
    // <Navigation/>
  );
}

export default App;
