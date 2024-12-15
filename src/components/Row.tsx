import React from 'react';
import Cell from './Cell';

interface RowProps {
  guess: string,
  targetWord: string
}

const Row: React.FC<RowProps> = ({ guess, targetWord }) => {
  return (
    <div className="row">
      {guess.split('').map((letter, index) => (
        <Cell key={index} letter={letter} index={index} targetWord={targetWord}/>
      ))}
    </div>
  );
};

export default Row;