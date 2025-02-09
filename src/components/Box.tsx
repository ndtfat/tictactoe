import React from "react";
import { Player } from "../type";
import { playerColorMap } from "../ultil";

type Props = {
  value: Player | null;
  onClick: () => void;
  className: string;
};

const Box: React.FC<Props> = ({ value, className, onClick }) => {
  return (
    <div
      className={`size-[140px] flex justify-center items-center text-4xl ${
        value ? playerColorMap[value].color : ""
      } ${className}`}
      style={{ cursor: !value ? "pointer" : "not-allowed" }}
      onClick={value ? undefined : onClick}
    >
      <div>{value}</div>
    </div>
  );
};

export default Box;
