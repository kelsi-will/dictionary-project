import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning({ meaning }) {
    return (
    <div className="Meaning">
      <h4>{meaning.partOfSpeech}</h4>
      {meaning.definitions.map((definition, index) => {
      return (
        <div key={index}>
          <p>
          <div className="definition">{definition.definition}</div>
          <div className="example"><em>{definition.example}</em></div>
          <Synonyms synonyms={definition.synonyms} />
          </p>
        </div>
      )})
      }
    </div>
    );
}

export default Meaning;