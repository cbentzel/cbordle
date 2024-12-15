import React, { useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './styles/App.css';
import words from './data/words.json';
import { shuffleArray } from './utils/shuffle';

const seed = 'foobar';
const shuffleWords = shuffleArray(words, seed);

const getTargetWord = () => {
    return shuffleWords[497].toUpperCase();
}

const App: React.FC = () => {
    const [guesses, setGuesses] = useState<string[]>([]);
    const targetWord = getTargetWord();;
    const maxGuesses = 8;

    const handleGuess = (guess: string) => {
        console.log(guess);
        if (guesses.length < maxGuesses && guess.length === 6) {
            setGuesses([...guesses, guess]);
        }
    };

    return (
        <div className="App">
            <h1>Wordle Clone</h1>
            <Board guesses={guesses} targetWord={targetWord} />
            <Keyboard onGuess={handleGuess} guesses={guesses} targetWord={targetWord} />
        </div>
    );
};

export default App;