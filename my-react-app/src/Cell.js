import React, { useContext } from 'react';
import { GridContext } from './GridContext';

const Cell = ({ id }) => {
  const { toggleCell, isActive } = useContext(GridContext);

  const handleClick = () => {
    toggleCell(id);
  };

  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isActive(id) ? 'black' : 'white',
  };

  return <div style={style} onClick={handleClick} />;
};

export default Cell;
