import React from "react";

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <div
      {...props}
      className={`px-3 py-2 text-sm cursor-pointer hover:bg-neutral-400 hover:text-white transition border border-neutral-200 rounded-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Button;
