import React from "react";
import Audio from "./Audio";

function Phonetic({ phonetic }) {
  if (phonetic) {
    return (
      <div className="Phonetic">
  {phonetic.map((phonetic, index) => {
    return (
      <div key={index}>
        <Audio audio={phonetic.audio}/>
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