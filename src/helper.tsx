import { Grid, Player } from "./type";

export const checkWinner: (grid: Grid) => Player | null = (grid) => {
  const n = grid.length;

  // Check rows and columns
  for (let i = 0; i < n; i++) {
    if (grid[i].every((cell) => cell === grid[i][0] && cell)) {
      return grid[i][0];
    }
    if (grid.every((row) => row[i] === grid[0][i] && row[i])) {
      return grid[0][i];
    }
  }

  // Check main diagonal
  if (grid.every((row, i) => row[i] === grid[0][0] && row[i])) {
    return grid[0][0];
  }
  if (
    grid.every((row, i) => row[n - 1 - i] === grid[0][n - 1] && row[n - 1 - i])
  ) {
    return grid[0][n - 1];
  }

  return null;
};

export const checkDraw: (grid: Grid) => boolean = (grid) => {
  return grid.every((r) => r.every((box) => box));
};

export const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours} : ${minutes}`;
};
