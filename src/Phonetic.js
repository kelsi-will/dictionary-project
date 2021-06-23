import React from "react";

function Phonetic({ phonetic }) {
  if (phonetic) {
    return (
      <div className="Phonetic">
  {phonetic.map((phonetic, index) => {
    return (
      <div key={index}>
        <a href={phonetic.audio} target="_blank">Listen</a>
        <span> {phonetic.text}</span>
        </div>
      )})
  }
   </div>
    );
} else {
  return null;
}
}
    
export default Phonetic;