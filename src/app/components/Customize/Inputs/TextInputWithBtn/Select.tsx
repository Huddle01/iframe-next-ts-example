import React from "react";
import cn from "clsx";

type Props = Pick<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  "value" | "onChange"
> & { options: readonly string[]; disabled?: boolean };

const Select = ({ value, onChange, options, disabled }: Props) => {
  return (
    <div
      className={cn(
        "flex-1 flex border border-slate-600 rounded-lg mr-2 px-2 ",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <select
        disabled={disabled}
        value={value}
        onChange={onChange}
        className=" flex-1  bg-transparent outline-none  cursor-pointer"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="border border-neutral-600 bg-neutral-800 text-center"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
