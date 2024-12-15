import React, {useState} from 'react';

interface KeyboardProps {
  onGuess: (guess: string) => void;
  guesses: string[];
  targetWord: string;
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guesses, targetWord }) => {
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
      onGuess(guess);
      setGuess('');
    }
  }

  const getLetterStatus = (letter: string): string => {
    let status = '';
    for (const guess of guesses) {
      if (guess.includes(letter)) {
          if (targetWord.includes(letter)) {
            if (targetWord[guess.indexOf(letter)] === letter) {
              status = 'correct';
            } else {
              status = 'misplaced';
            }
          } else {
            status = 'incorrect';
          }
      }
    }
    return status;
  };

  const rows = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  return (
    <div className="keyboard">
      <div className="guess-display">
        {guess}
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetter(letter)}
              className={getLetterStatus(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
};

export default Keyboard;