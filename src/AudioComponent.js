import React from "react";
import "./AudioComponent.css"

function AudioComponent({ audio }) {
      let audioElement = new Audio(audio);
      function play() {
      audioElement.play();
    }
  return (
    <div className="AudioComponent">
      <button onClick={play}>
      <i class="fas fa-volume-up"></i>
      </button>
    </div>
  );
}

export default AudioComponent;