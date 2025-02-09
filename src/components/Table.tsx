import React from "react";
import { Grid } from "../type";
import Box from "./Box";

const Table: React.FC<{
  grid: Grid;
  onMark: (row: number, col: number) => void;
}> = ({ grid, onMark }) => {
  return (
    <div>
      {grid.map((row, rowIdx) => (
        <div key={Math.random()} className="flex">
          {row.map((box, colIdx) => (
            <Box
              key={`${rowIdx}-${colIdx}`}
              value={box}
              onClick={() => onMark(rowIdx, colIdx)}
              className={`
                border border-neutral-300
                ${rowIdx === 0 ? "border-t-0" : ""} 
                ${rowIdx === grid.length - 1 ? "border-b-0" : ""} 
                ${colIdx === 0 ? "border-l-0" : ""} 
                ${colIdx === row.length - 1 ? "border-r-0" : ""}
              `}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
