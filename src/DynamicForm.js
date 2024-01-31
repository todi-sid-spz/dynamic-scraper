import React, { useState } from 'react';

const DynamicForm = () => {
  const [inputs, setInputs] = useState([{tag:'',selector:''}]); // State to store input values

  // Function to add a new input field
  const addInput = () => {
    setInputs([...inputs, {tag:'',selector:''}]);
  };

  // Function to remove the last input field
  const removeInput = () => {
    setInputs(inputs.slice(0, -1));
  };

  // Function to handle input changes
  const handleInputChange = (index, fieldName, value) => {
    const newInputs = [...inputs];
    newInputs[index][fieldName] = value;
    setInputs(newInputs);
  };

  return (
    <div className="container">
        <nav>
            <h1><strong>Spiralyze</strong></h1>
        </nav>
      <h3>Dynamic Web Scrapper Form</h3>
      <div>
      <label htmlFor={'URL'}>URL: </label>
      <input
            type="text"
            placeholder='Enter URL'
          />
    </div>
      <button onClick={addInput}>Add Input</button>
      <button onClick={removeInput} disabled={inputs.length === 1}>
        Remove Input
      </button>

      {/* Render input fields based on state */}
      {inputs.map((input, index) => (
        <div key={index} className='input-container'>
          <label htmlFor={`input-${index + 1}`}>{`Input ${index + 1}: `}</label>
          <div>
            <label>Tag: </label>
          <input
            type="text"
            value={input.tag}
            placeholder='Add Tag'
            onChange={(e) => handleInputChange(index, 'tag', e.target.value)}
          />
          <label> Element Sector: </label>
          <input
            type="text"
            value={input.selector}
            placeholder='Add Element Selector'
            onChange={(e) => handleInputChange(index, 'selector', e.target.value)}
          />
        </div>
        </div>
      ))}

        <button >Scrape</button>

      <div className='json-response'>
        <h2>JSON Response:</h2>
        {/* Display input values */}
        <div className='json-response-wrapper'>
          {inputs.map((input, index) => (
            <div key={index} className='json-response-item'>{`"${input.tag}": "${input.selector}"`}</div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default DynamicForm;
