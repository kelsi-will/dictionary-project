import React from "react";

function Audio({ audio }) {
  function play() {
      let audioElement = new Audio(audio);
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

export default Audio;