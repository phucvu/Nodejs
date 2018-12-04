// SurveyField contains logic to render a single lable and text input
import React from 'react';

// reduxform generate props automatically
// props = {input: ..., object: ...., ...:...}
// 
export default ({ input, label, meta: { error, touched } }) => {
  //console.log(meta);

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};