import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessGrid({ guessList }) {
  const some = range(6);
  console.log("row: ", some);

  console.info({ guessList });
  console.log(guessList[3]);

  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((row, index) => {
            return guessList[index] !== undefined ? (
              <p className="guess" key={`row_` + row}> {
                range(5).map(num => (
                  <span className="cell" key={`row_` + row + `cell_` + num}>
                    {guessList[index][num]}
                  </span>
                ))
              }
              </p>
            ) : (
              <p className="guess" key={`row_` + row}> {
                range(5).map((cell, idx) => (
                  <span className="cell" key={`row_` + cell + `cell_` + idx}></span>
                ))
              }
              </p>);
          }
        )
      }
    </div>
  );
}

export default GuessGrid;