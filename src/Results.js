import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


function Results({ results }) {
    if (results) {
    return (
    <div className="Results">
        <h2>{results.word}</h2>
        <Phonetic phonetic={results.phonetics} />
        {results.meanings.map((meaning, index) => {
          return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
          )
        })}
    </div>
    );
} else {
    return null;
}
}

export default Results;