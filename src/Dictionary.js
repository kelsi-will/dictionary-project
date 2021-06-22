import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  const[keyword, setKeyword] = useState("");
  const[results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

    return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" placeholder="Let's find your word" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
      <Results results={results}/>
    </div>
    )
}

export default Dictionary;