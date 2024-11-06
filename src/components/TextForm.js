import React,{useState} from "react";


export default function TextForm(props) {
  const[text,setText]=useState("");
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const handleClearClick=()=>{
    let newtext='';
    setText(newtext)
  }
  const handleCopy=()=>{
    var text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange=(e)=>{
    setText("OnChange")
    setText(e.target.value)
  }
  
  return (
    <div>
      <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter Here...."
        ></textarea>
      </div>
      <div className="btn btn-primary m-1" onClick={handleUpClick}>Conver to UpperCase</div>
      <div className="btn btn-primary m-1" onClick={handleLoClick}>Conver to LowerCase</div>
      <div className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</div>
      <div className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
