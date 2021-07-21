import React from "react";

function AudioComponent({ audio }) {
      let audioElement = new Audio(audio);
      function play() {
      audioElement.play();
    }
  return (
    <div className="Audio">
      <button onClick={play}>
      <i class="fas fa-volume-up"></i>
      </button>
    </div>
  );
}

export default AudioComponent;