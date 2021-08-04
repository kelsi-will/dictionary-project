import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";


function Results({ results }) {
    if (results) {
    return (
    <div className="Results">
      <section>
        <h3>{results.word}</h3>
        <Phonetic phonetic={results.phonetics} />
      </section>
        {results.meanings.map((meaning, index) => {
          return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
          )
        })}
    </div>
    );
} else {
    return null;
}
}

export default Results;