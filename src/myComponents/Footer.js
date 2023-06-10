import React, {useState} from "react";




const Footer = (props) => {
  function toUpCase(){
    setText(text.toUpperCase());
  }
  function toLowCase(){
    setText(text.toLowerCase());
  }
  
  function changeText(event){
    setText(event.target.value);
  }
  function toRest(){
   setText("");
  }
  
  const [text,setText]= useState("");
  
  return (
    <>
    <div>
      <div className="container mb-3" style={{color:props.mode==="light"?"black":"white"}}>
      <h1>{props.heading}</h1>
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={changeText}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={toUpCase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={toRest}>Reset</button>
      <button className="btn btn-primary mx-1" onClick={toLowCase}>Convert to Lowercase</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
};

export default Footer;
