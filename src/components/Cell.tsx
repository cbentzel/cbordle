import React from 'react';

interface CellProps {
  letter: string;
  index: number;
  targetWord: string;
}


const Cell: React.FC<CellProps> = ({ letter, index, targetWord }) => {
  const getStatus = (): string => {
    if (letter === '') {
      return 'empty';
    } else if (targetWord[index] === letter) {
      return 'correct';
    } else if (targetWord.includes(letter)) {
      return 'misplaced';
    } else {
      return 'incorrect';
    }
  };

  const getClassName = () => {
    switch (getStatus()) {
      case 'correct':
        return 'cell correct';
      case 'misplaced':
        return 'cell misplaced';
      case 'incorrect':
        return 'cell incorrect';
      default:
        return 'cell empty';
    }
  };

  return <div className={getClassName()}>{letter}</div>;
};

export default Cell;