import React, { useState } from 'react';



const TextForm = (props) => {
const HandleUpCLick = ()=>{
  // console.log("You CLICK THE BuTton " + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert(" Convert to UperCase!", "success")
}
const HandleLowCLick = ()=>{
  // console.log("You CLICK THE BuTton " + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert(" Convert to LowerCase!", "success")
  

}
const HandleClearCLick = ()=>{
  let newText = ""
  setText(newText);
  props.showAlert(" Cleared TExt!", "success")
}

const HandleOnChange = (event)=>{
  // console.log("On CHange");
  setText(event.target.value)
}
const HandleCopy =()=>{
  var text= document.getElementById("exampleFormControlTextarea1")
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert(" Copy To ClipBoard!", "success")
}
const HandleRemoveSpaces = ()=>{
  let newtext =text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.showAlert(" Remove Spaces!", "success")
}

const [text, setText] = useState("Enter Your Text") ;
  // text = '';  //wrong way to change the value
  // setText('Enter Your TExt 2')

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black',}}>
        <h1>{ props.heading }</h1>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1"  className="form-label"></label>
          
          <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
          <button className='btn btn-primary my-3 mx-2' onClick={HandleUpCLick}>Convert To Uper Case</button>
          <button className='btn btn-primary my-3 mx-2' onClick={HandleLowCLick}>Convert To Lower Case</button>
          <button className='btn btn-primary my-3 mx-2' onClick={HandleClearCLick}>Clear</button>
          <button className='btn btn-primary my-3 mx-2' onClick={HandleCopy}>Copy</button>
          <button className='btn btn-primary my-3 mx-2' onClick={HandleRemoveSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words  {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  )
}

export default TextForm