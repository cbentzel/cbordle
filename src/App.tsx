import React, { useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './styles/App.css';

const App: React.FC = () => {
    const [guesses, setGuesses] = useState<string[]>([]);
    const targetWord = 'puzzle';
    const maxGuesses = 8;

    const handleGuess = (guess: string) => {
        if (guesses.length < maxGuesses && guess.length === 6) {
            setGuesses([...guesses, guess]);
        }
    };

    return (
        <div className="App">
            <h1>Wordle Clone</h1>
            <Board guesses={guesses} targetWord={targetWord} />
            <Keyboard onGuess={handleGuess} />
        </div>
    );
};

export default App;