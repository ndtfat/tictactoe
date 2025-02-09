import React from "react";
import { HistoryItem } from "../type";
import { formatTime } from "../helper";
import { playerColorMap } from "../ultil";

const History: React.FC<{ history: HistoryItem[] }> = ({ history }) => {
  return (
    <div className="fade-in">
      <div className="flex gap-[20px] justify-center items-center text-2xl text-center mb-5">
        <span className={`font-bold ${playerColorMap["X"].color}`}>X</span>
        <span>{history.filter((e) => e.winner == "X").length}</span>
        <span>-</span>
        <span>{history.filter((e) => e.winner == "O").length}</span>
        <span className={`font-bold ${playerColorMap["O"].color}`}>O</span>
      </div>

      <div>
        {history.map((item) => (
          <div
            key={JSON.stringify(item.time)}
            className={`${
              playerColorMap[item.winner].bg
            } p-3 flex text-xl justify-between`}
          >
            <div>
              <span
                className={`${
                  playerColorMap[item.winner].color
                } font-bold mr-2`}
              >
                {item.winner}
              </span>
              {item.winner !== "Draw" && "Win"}
            </div>

            <div>{formatTime(item.time)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
