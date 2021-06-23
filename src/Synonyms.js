import React from "react";

function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="Synonyms">
        {synonyms.map((synonym, index) => {
          return (
          <li key={index}>{synonym}</li>
        )})}
      </ul>
      );
  } else {
      return null
  }
}

export default Synonyms;