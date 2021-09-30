import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";


function Dictionary({ defaultKeyword }) {
  const[keyword, setKeyword] = useState(defaultKeyword);
  const[results, setResults] = useState(null);
  const[loaded, setLoaded] = useState(false);
  const[photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f9170000100000123f59c05e43f4f8e9a70fb22750fecc9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos}/>
      </div>
      )
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;