import React from 'react';
import Cell from './Cell';

interface RowProps {
  guess: string;
  targetWord: string;
}

const Row: React.FC<RowProps> = ({ guess, targetWord }) => {
  const guessLetters = guess.split('').concat(Array(6 - guess.length).fill(''));

  const getStatuses = (): string[] => {
    const targetLetters : string[] = targetWord.split('');

    // First pass: mark correct letters
    const statusArray : string[] = guessLetters.map((guessLetter, i) => {
      if (targetLetters[i] === guessLetter) {
        targetLetters[i] = '';
        return 'correct';
      } else {
        return '';
      }
    });

    // Second pass: mark misplaced letters
    guessLetters.forEach((guessLetter, i) => {
      if (statusArray[i] === '' && targetLetters.includes(guessLetter)) {
        const targetIndex = targetLetters.indexOf(guessLetter);
        if (targetIndex !== -1) {
          targetLetters[targetIndex] = ''; // Mark this letter as matched
          statusArray[i] = 'misplaced';
        }
      }
    });

    // Third pass: mark incorrect letters
    guessLetters.forEach((guessLetter, i) => {
      if (guessLetter !== '' && statusArray[i] === '') {
        statusArray[i] = 'incorrect';
      }
    });

    return statusArray;
  };

  const statuses = getStatuses();

  return (
    <div className="row">
      {guessLetters.map((letter, index) => (
        <Cell key={index} letter={letter} status={statuses[index]} />
      ))}
    </div>
  );
};

export default Row;