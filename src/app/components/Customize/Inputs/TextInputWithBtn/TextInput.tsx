import React from "react";

type Props = {};

export type TInputProps = Pick<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "name" | "placeholder" | "value" | "onChange"
>;

const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
}: Props & TInputProps) => {
  return (
    <input
      className="border border-slate-600 bg-neutral-800 flex-1 rounded-lg px-3"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
