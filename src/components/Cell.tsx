import React from 'react';

interface CellProps {
  letter: string;
  status: 'correct' | 'incorrect' | 'misplaced' | 'empty';
}

const Cell: React.FC<CellProps> = ({ letter, status }) => {
  const getClassName = () => {
    switch (status) {
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