//this is for learning: this convert the text into uppercase with react...

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercsse was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Here-");

  return (
    <>
      <div className="container-1" style={{color: props.mode==='dark'? 'white': 'dark'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'? 'grey': 'white',color: props.mode==='dark'? 'white': 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
      <div className="container-2 my-4" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>Your text summaary</h1>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
