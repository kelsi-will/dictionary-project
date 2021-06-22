import React from "react";

function Results({ results }) {
    if (results.length) {
    return (
    <div className="Results">
        <h2>{results.word}</h2>
    </div>
    );
} else {
    return null;
}
}

export default Results;