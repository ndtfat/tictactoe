import { Player } from "./type";

export const playerColorMap: Record<
  Player | "Draw",
  { bg: string; color: string }
> = {
  X: {
    bg: "bg-red-100",
    color: "text-red-600",
  },
  O: {
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  Draw: {
    bg: "bg-neutral-100",
    color: "text-neutral-600",
  },
};
