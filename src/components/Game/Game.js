import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessBlock from "./GuessBlock";
import GuessGrid from "./GuessGrid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return <>
    <GuessGrid guessList={guessList} />
    {/*<GuessBlock guessList={guessList} />*/}
    <GuessInput guessList={guessList}
                setGuessList={setGuessList} />
  </>;
}

export default Game;
