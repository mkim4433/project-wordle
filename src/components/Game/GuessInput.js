import React from "react";

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState("");
  const inputArr = [...guessList];

  return (
    <form className="guess-input-wrapper"
          onSubmit={(event) => {
            event.preventDefault();
            console.info({ guess });
            inputArr.push(guess);
            console.info({ inputArr });
            setGuessList(inputArr);
            setGuess("");
          }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
             type="text"
             minLength={5}
             maxLength={5}
             value={guess}
             onChange={(event) => {
               setGuess(event.target.value.toUpperCase());
             }}
      />
    </form>
  );
}

export default GuessInput;