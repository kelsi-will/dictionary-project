import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const[keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

  }

    return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" placeholder="Let's find your word" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
    )
}