import React from "react";
import { Player } from "../type";
import { playerColorMap } from "../ultil";

const Winner: React.FC<{ winner: Player | "Draw" }> = ({ winner }) => {
  return (
    <div className="fade-in size-full flex justify-center items-center text-5xl">
      {winner == "Draw" ? (
        <div className=" px-5 py-5 rounded-lg text-white bg-neutral-400">
          Draw
        </div>
      ) : (
        <div className="flex items-center gap-[40px]">
          <div
            className={`${playerColorMap[winner].bg} px-5 py-5 rounded-lg ${playerColorMap[winner].color}`}
          >
            {winner}
          </div>
          Win
        </div>
      )}
    </div>
  );
};

export default Winner;
