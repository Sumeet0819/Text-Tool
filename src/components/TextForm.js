import React , {useState} from "react";


export default function TextForm(props) {
    const handleUpclick = () =>{
      //  console.log("Upppercase was clicked" +text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowclick = () =>{
        //  console.log("Upppercase was clicked" +text)
          let newText = text.toLowerCase();
          setText(newText)
      }
      const handleClearclick = () =>{
        //  console.log("Upppercase was clicked" +text)
          let newText = ('');
          setText(newText)
      }
    const handleOnChange = (event) =>{
     //   console.log("Onchange was clicked")
        setText(event.target.value)
    }
    const[text,setText] =useState('');
  return (
    <>
    <div className="container">
        <h1 style={{color:props.mode==='light'?'black':'white',}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'#495057':'white',color:props.mode==='light'?'black':'white'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
    </div>
    <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2 className="Preview my-3">Preview</h2>
        <p>{text.length>0?text:"Enter Something to get preview"}</p>
    </div>
    </>
  );
}
