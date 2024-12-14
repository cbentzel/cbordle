import React from 'react';
import Cell from './Cell';

interface RowProps {
  letters: string[];
}

const Row: React.FC<RowProps> = ({ letters }) => {
  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Cell key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Row;