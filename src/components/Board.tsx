import React, { useState } from 'react';
import Row from './Row';
import Keyboard from './Keyboard';

const Board = () => {
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const targetWord = 'puzzle'; // Example target word

    const handleKeyPress = (key: string) => {
        if (key === 'Enter') {
            if (currentGuess.length === 6 && guesses.length < 8) {
                setGuesses([...guesses, currentGuess]);
                setCurrentGuess('');
            }
        } else if (key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
        } else if (currentGuess.length < 6) {
            setCurrentGuess(currentGuess + key);
        }
    };

    return (
        <div>
            {guesses.map((guess, index) => (
                <Row key={index} guess={guess} targetWord={targetWord} />
            ))}
            <Row guess={currentGuess} targetWord={targetWord} />
            <Keyboard onKeyPress={handleKeyPress} />
        </div>
    );
};

export default Board;