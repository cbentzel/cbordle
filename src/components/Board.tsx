import React from 'react';
import Row from './Row';

interface BoardProps {
    guesses: string[],
    targetWord: string
}

const Board : React.FC<BoardProps> = ({guesses, targetWord}) => {
 
    return (
        <div>
            {guesses.map((guess, index) => (
                <Row key={index} guess={guess} targetWord={targetWord} />
            ))}
        </div>
    );
};

export default Board;