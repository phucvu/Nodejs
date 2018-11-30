// SurveyField contains logic to render a single lable and text input
import React from 'react';

// reduxform generate props automatically
// props = {input: ..., object: ...., ...:...}
// 
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};