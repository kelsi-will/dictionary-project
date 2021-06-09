import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const[keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    </div>
    )
}