import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './About';
import TextForm from './components/TextForm';
function App(props) {
  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
    
})
const [btntext,setBtnText]=useState("Enable Dark Mode")

const toggleStyle=()=>{
   if(myStyle.color ==='black'){
setMyStyle({
color:'white',
backgroundColor:'black',
border:'1px solid white'
})
setBtnText("Enable Light Mode")
   }

   else{
    setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
      })
      setBtnText("Enable Dark Mode")
   }
}
 
  return (
    <>
    <Navbar title="TextUtils" About="About us" Home="The home" style={myStyle}/>
    
    {/*<Navbar title="TextUtils" About="About Us" Home="Home"/>*/}
    
    <div className="container my-3"  style={myStyle}>
   <TextForm heading="Enter the text" />
   <About style={myStyle}></About>
    </div>
    <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>

      </div>
    </>
    );
}export default App;
