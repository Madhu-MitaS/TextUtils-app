import React,{useState} from 'react'

export default function TextForm(props){
  
    const [text,setText,]=useState("");
  //var pic=<img src="noodle.jpeg"></img>;
   
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        //setText("You have clicked on handleUpClick");
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        //setText("You have clicked on handleUpClick");
    }
    
   
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    return(
        <>
        <div className="container">
           
            <h1>{props.heading}</h1> 
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label" >Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
          
        </div>
        <div className="container">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
       
        
           
            
         
        </>
    )
} 