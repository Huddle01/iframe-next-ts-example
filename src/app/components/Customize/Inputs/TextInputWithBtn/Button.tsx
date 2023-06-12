import React from "react";

const Button = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="py-2 px-3 rounded-lg hover:opacity-75 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
