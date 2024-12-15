import React, { useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './styles/App.css';
import words from './data/words.json';
import { shuffleArray } from './utils/shuffle';

const seed = 'foobar';
const shuffleWords = shuffleArray(words, seed);

const startDate = new Date('2024-12-15');

function getTargetWord() {
    const daysSince = getDaysSince(startDate);
    if (daysSince > shuffleWords.length) {
        return 'WORDLE';
    } else {
        return shuffleWords[daysSince].toUpperCase();
    }
}

function getDaysSince(date: Date): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
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