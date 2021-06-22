import React from "react";

function Meaning({ meaning }) {
    return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
      return (
        <div key={index}>
          <p>{definition.definition}
          <br />
          <br />
          <em>{definition.example}</em>
          </p>
        </div>
      )})
      }
    </div>
    );
}

export default Meaning;