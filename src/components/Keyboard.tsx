import React, {useState, useEffect, useCallback} from 'react';

interface KeyboardProps {
  onGuess: (guess: string) => void;
  guesses: string[];
  targetWord: string;
  disabled: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guesses, targetWord, disabled }) => {
  const [guess, setGuess] = useState<string>('');

  const handleLetter = useCallback((letter: string) => {
    if (disabled) { return; }
    if (guess.length < 6) {
      setGuess(guess + letter);
    }
  }, [guess, disabled]);

  const handleDelete = useCallback(() => {
    if (disabled) { return; }
    if (guess.length > 0) {
      setGuess(guess.slice(0, -1));
    }
  }, [guess, disabled]);

  const handleEnter = useCallback(() => {
    if (disabled) { return; }
    if (guess.length === 6) {
      onGuess(guess);
      setGuess('');
    }
  }, [guess, onGuess, disabled]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;
      if (key === 'Enter') {
        handleEnter();
      } else if (key === 'Backspace') {
        handleDelete();
      } else if (/^[a-zA-Z]$/.test(key)) {
        handleLetter(key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleEnter, handleDelete, handleLetter]);

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

  return (
    <div className="keyboard">
      <div className="guess-display">
        {guess}
      </div>
        <div key={0} className="keyboard-row">
            {'QWERTYUIOP'.split('').map((letter) => (
                <button
                    key={letter}
                    onClick={() => handleLetter(letter)}
                    className={getLetterStatus(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
        <div key={1} className="keyboard-row">
            {'ASDFGHJKL'.split('').map((letter) => (
            <button
                key={letter}
                onClick={() => handleLetter(letter)}
                className={getLetterStatus(letter)}
            >
                {letter}
            </button>
            ))}
        </div>
        <div key={2} className="keyboard-row">
            <button className="special" onClick={handleEnter}>ENTER</button>
            {'ZXCVBNM'.split('').map((letter) => (
            <button
                key={letter}
                onClick={() => handleLetter(letter)}
                className={getLetterStatus(letter)}
            >
                {letter}
            </button>
            ))}
            <button className="special" onClick={handleDelete}>DEL</button>
        </div>
    </div>
  );
};

export default Keyboard;