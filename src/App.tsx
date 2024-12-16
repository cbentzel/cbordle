import React, { useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOverModal from './components/GameOverModal';
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
    const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);
    const targetWord = getTargetWord();;
    const maxGuesses = 8;

    const handleGuess = (guess: string) => {
        if (guesses.length >= maxGuesses || guess.length !== 6) {
            return;
        }

        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);

        if (guess === targetWord) {
            setGameOverMessage('Congratulations! You guessed the word!');
        } else if (newGuesses.length >= maxGuesses) {
            setGameOverMessage('Game Over! Better luck next time!');
        }
    };

    const handleCloseModal = () => {
        setGameOverMessage('closed');
    };

    return (
        <div className="App">
            <h1>Wordle Clone</h1>
            <Board guesses={guesses} targetWord={targetWord} />
            <Keyboard onGuess={handleGuess} guesses={guesses} targetWord={targetWord} disabled={!!gameOverMessage} />
            {gameOverMessage && gameOverMessage !== 'closed' && (
                <GameOverModal message={gameOverMessage} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;