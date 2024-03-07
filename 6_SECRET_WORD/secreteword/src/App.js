//Components
import StartSreen from './components/StartSreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import { wordsList } from './data/words';

//Styles
import './App.css';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPikckedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick a random word
    const word = 
      words[category][Math.floor(Math.random() * Object.keys(category).length)];

    console.log(word);

    return { word, category };
  }

  //Starts the secret word game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    console.log(word, category);

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    // fill states
    setPikckedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    
    setGameStage(stages[1].name);
  }

  //process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    //push guessed letter or remove a guess
    //Estou unindo um novo elemento a um array nessa parte
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }


  }
  console.log(guessedLetters);
  console.log(wrongLetters);

  //starts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartSreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} 
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
