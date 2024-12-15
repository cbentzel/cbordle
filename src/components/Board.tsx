import React from 'react';
import Row from './Row';

interface BoardProps {
    guesses: string[],
    targetWord: string
}

const Board : React.FC<BoardProps> = ({guesses, targetWord}) => {
 
    const maxGuesses = 8;
    const emptyRows = maxGuesses - guesses.length;

    return (
        <div className="board">
            {guesses.map((guess, index) => (
                <Row key={index} guess={guess} targetWord={targetWord} />
            ))}
            {Array.from({ length: emptyRows }).map((_, index) => (
                <Row key={index + guesses.length} guess="" targetWord={targetWord} />
            ))}
        </div>
    );
};

export default Board;