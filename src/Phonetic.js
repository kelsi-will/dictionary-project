import React from "react";

function Phonetic({ phonetic }) {
  if (phonetic) {
    return (
      <div className="Phonetic">
  {phonetic.map((phonetic, index) => {
    return (
      <div key={index}>{phonetic}</div>
      )})
  }
   </div>
    );
} else {
  return null;
}
}
    
export default Phonetic;