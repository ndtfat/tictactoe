export type Player = "X" | "O";

export type Grid = (Player | null)[][];

export type Screen = "table" | "winner" | "history";

export type HistoryItem = {
  winner: Player | "Draw";
  time: Date;
};
