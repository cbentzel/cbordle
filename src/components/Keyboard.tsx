import React from 'react';

interface KeyboardProps {
  onGuess: (action: string, letter?: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button key={letter} onClick={() => onGuess('letter', letter)}>
          {letter}
        </button>
      ))}
      <button onClick={() => onGuess('delete')}>Delete</button>
      <button onClick={() => onGuess('enter')}>Enter</button>
    </div>
  );
};

export default Keyboard;