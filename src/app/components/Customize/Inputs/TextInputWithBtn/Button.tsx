import React from "react";
import cn from "clsx";
const Button = ({
  children,
  disabled,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className={cn(
        "py-2 px-3 rounded-lg  cursor-pointer",
        disabled
          ? "bg-[#1C1E24] text-slate-500 cursor-not-allowed"
          : "hover:opacity-75"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
