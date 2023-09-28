import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=() =>{
        // console.log("Uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success");
    }
    const handleLoClick=() =>{
        //lower case func
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","Success");
    
        
    }

    const handleClearClick=() =>{
        //clear
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","Success");

    }

    const handleExtraSpaces=() =>{
        //extra spaces remove
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","Success");
    }
    const handleOnChange=(event) =>{
        // console.log("On change")
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter text here');
    
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'#042743' }}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'#042743'  }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>

     
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

      
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra space</button>

    </div>
    <div className="container my-3"  style={{ color: props.mode === 'dark'? 'white':'#042743' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } minutes to read </p>
        {/* 0.008 * numer of words = mins to read */}
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something to preview it here"}</p>
    </div>
    </>
  );
}
