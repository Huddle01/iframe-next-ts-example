import React from "react";
import TextInput, { TInputProps } from "./TextInput";
import Button from "./Button";

type Props = {};

const TextInputWithBtn = ({
  name,
  placeholder,
  value,
  onChange,
}: Props & TInputProps) => {
  return (
    <div className="flex gap-2 odd:my-3 ">
      <TextInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button>Save</Button>
    </div>
  );
};

export default TextInputWithBtn;
