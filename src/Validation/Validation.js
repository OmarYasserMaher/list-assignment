import React from "react";
const validation = (props) => {
  let output = "Text long enough";
  if (props.length < 5) {
    output = "Text too short";
  }
  return (
    <div>
      <p>{output}</p>
    </div>
  );
};

export default validation;
