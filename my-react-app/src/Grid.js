import React, { useState } from 'react';
import Cell from './Cell';
import { GridContext } from './GridContext'

const Grid = () => {
  const [activeCells, setActiveCells] = useState({});

  const toggleCell = (id) => {
    setActiveCells((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (id) => {
    return !!activeCells[id];
  };

  const activeCount = Object.values(activeCells).filter(Boolean).length;

  return (
    <GridContext.Provider value={{ toggleCell, isActive }}>
      <div>Active Cells: {activeCount}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)' }}>
        {['cell1', 'cell2', 'cell3', 'cell4'].map((cellId) => (
          <Cell key={cellId} id={cellId} />
        ))}
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
