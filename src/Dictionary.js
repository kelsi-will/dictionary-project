import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

function Dictionary({ defaultKeyword }) {
  const[keyword, setKeyword] = useState(defaultKeyword);
  const[results, setResults] = useState(null);
  const[loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" defaultValue={defaultKeyword} onChange={handleKeywordChange} />
        </form>
        <div className="hint">
          suggested words: ocean, library, succulent...
        </div>
        </section>
        <Results results={results}/>
      </div>
      )
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;