import React from "react";
import Synonyms from "./Synonyms.js";

function Meaning({ meaning }) {
    return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
      return (
        <div key={index}>
          <p>
            <strong>Definition: </strong>{definition.definition}
          <br />
          <strong>Example: </strong><em>{definition.example}</em>
          <br />
          <Synonyms synonyms={definition.synonyms} />
          </p>
        </div>
      )})
      }
    </div>
    );
}

export default Meaning;