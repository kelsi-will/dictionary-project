import React from "react";
import AudioComponent from "./AudioComponent";
import "./Phonetic.css"

function Phonetic({ phonetic }) {
  if (phonetic) {
    return (
      <div className="Phonetic">
  {phonetic.map((phonetic, index) => {
    return (
      <div key={index}>
         <AudioComponent audio={phonetic.audio}/>
        <span className="text">{phonetic.text}</span>
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