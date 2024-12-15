import React, {useState} from 'react';

interface KeyboardProps {
  onGuess: (action: string, letter?: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [guess, setGuess] = useState<string>('');

  const handleLetter = (letter: string) => {
    if (guess.length < 6) {
      setGuess(guess + letter);
    }
  }

  const handleDelete = () => {
    if (guess.length > 0) {
      setGuess(guess.slice(0, -1));
    }
  }

  const handleEnter = () => {
    if (guess.length === 6) {
      onGuess('word', guess);
      setGuess('');
    }
  }

  return (
    <div className="keyboard">
      <div>
        {guess}
      </div>
      {letters.map((letter) => (
        <button key={letter} onClick={() => handleLetter(letter)}>
          {letter}
        </button>
      ))}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default Keyboard;