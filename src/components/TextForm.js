import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper case", "warning")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lower case", "warning")
    }
    const handleClearClick = ()=>{
        let newText =('');
        setText(newText);
        props.showAlert("Text Cleared", "warning")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const [text, setText] = useState("");

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "warning")
    }
    return (
        <>
        <div className='container mt-4 mb-4'>
            <div className="mb-3">
                <h2>Enter your Text here</h2>
                <textarea className="form-control" id="textForm" value={text} onChange={handleOnChange} rows="6"></textarea>
                <button className='my-3 mx-3 btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='my-3 mx-3 btn btn-primary' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='my-3 mx-3 btn btn-primary' onClick={handleExtraSpaces}>Remove Space</button>
                <button className='my-3 mx-3 btn btn-danger' onClick={handleClearClick}>Clear</button>
            </div>
        </div>
        <div className='container my-4'>
        <h2>You Text Summery</h2>
        <p>Words: {text.split("").length}, Characters{text.length}</p>
        <p>{0.008 * text.split("").length} Minutes Read</p>
        <h3>Preview</h3>
        <p className='border p-3 rounded'>{text.length>0?text:'Enter Something to Preview'}</p>
        </div>
        </>
    )
}
