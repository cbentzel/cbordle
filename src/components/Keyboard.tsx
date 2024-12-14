import React from 'react';

const Keyboard = ({ onLetterClick, onEnterClick, onDeleteClick }) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="keyboard">
            {letters.map((letter) => (
                <button key={letter} onClick={() => onLetterClick(letter)}>
                    {letter}
                </button>
            ))}
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onEnterClick}>Enter</button>
        </div>
    );
};

export default Keyboard;