import React from "react";
import TextInput, { TInputProps } from "./TextInput";
import Button from "./Button";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type TBtn = Pick<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
>;

const TextInputWithBtn = ({
  name,
  placeholder,
  value,
  onChange,
  className,
  onClick,
}: Props & TInputProps & TBtn) => {
  return (
    <div className="flex gap-2 odd:my-3 ">
      <TextInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      <Button onClick={onClick}>Save</Button>
    </div>
  );
};

export default TextInputWithBtn;
