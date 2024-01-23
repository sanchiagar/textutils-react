import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleclearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
        
    }
    const handlecopy =()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    const [text, setText] = useState('');  //state setting
    // text = "new text" wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1 className="mb-4" >{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'pink', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-2"  style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes are required to read </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}