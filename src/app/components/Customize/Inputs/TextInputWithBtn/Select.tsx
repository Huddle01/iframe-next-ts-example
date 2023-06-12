import React from "react";

type Props = Pick<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  "value" | "onChange"
> & { options: readonly string[] };

const Select = ({ value, onChange, options }: Props) => {
  return (
    <div className="flex-1 flex border border-slate-600 rounded-lg mr-2 px-2 ">
      <select
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
