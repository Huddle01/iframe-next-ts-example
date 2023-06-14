import React from "react";

type Props = {
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Toggle = ({ name, checked, onChange }: Props) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        name={name}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-25 after:content-[''] after:absolute after:top-[2px] after:left-[2px] peer-checked:after:bg-slate-25 after:bg-slate-500  after:border-slate-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:bg-primary-500"></div>
    </label>
  );
};

export default Toggle;
