import React from 'react';
import Cell from './Cell';

interface RowProps {
  guess: string,
  targetWord: string
}

const Row: React.FC<RowProps> = ({ guess, targetWord }) => {
  const letters = guess.split('').concat(Array(6 - guess.length).fill(''));

  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Cell key={index} letter={letter} index={index} targetWord={targetWord}/>
      ))}
    </div>
  );
};

export default Row;