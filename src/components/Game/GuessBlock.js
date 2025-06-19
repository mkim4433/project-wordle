import React from "react";

function GuessBlock({ guessList }) {
  return (
    <div className="guess-results"> {
      guessList.map((word, index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {word}
        </p>
      ))
    }
    </div>
  );
}

export default GuessBlock;