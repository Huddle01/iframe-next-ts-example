import React from "react";
import Checkbox, { TCheckboxProps } from "./Checkbox";

type Props = {
  title: string;
};

const CheckboxWithName = ({ title, ...rest }: Props & TCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox {...rest} />
      <div className="text-slate-200 font-semibold text-sm flex items-center">
        {title}
      </div>
    </div>
  );
};

export default CheckboxWithName;
