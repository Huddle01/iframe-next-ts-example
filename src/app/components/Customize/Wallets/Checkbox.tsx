import React from "react";

export type TCheckboxProps = Pick<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange" | "checked" | "name"
>;

const Checkbox = ({ ...rest }: TCheckboxProps) => {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-xl dark:bg-gray-700 dark:border-gray-600"
      {...rest}
    />
  );
};

export default Checkbox;
