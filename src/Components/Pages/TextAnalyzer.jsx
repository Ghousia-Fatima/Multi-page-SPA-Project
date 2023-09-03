import React, { useState } from 'react';

export default function TextAnalyzer() {
  const [text, setText] = useState('');


  const toUpperCase = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const toLowerCase = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  const clearText = () => {
    setText('');
  };

  return (
    <div>
      <h1 className='heading'>Text Analyzer</h1>
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          rows={12}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder='Enter Your Text Here...'
        ></textarea>
      </div>
      <button className="btn btn-primary mt-2 mx-2" onClick={toUpperCase}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mt-2 mx-2" onClick={toLowerCase}>
        Convert to Lower Case
      </button>
      <button className="btn btn-danger mt-2 mx-2" onClick={clearText}>
        Clear Text
      </button>

      <div className="container"> 
        <h2>Your Text Summary</h2>
        <span>{text.split(' ').length - 1} Words </span> 
        <p>{text.length} Characters </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}


