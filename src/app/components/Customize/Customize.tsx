import React, { Dispatch, SetStateAction } from "react";
import Essentials from "./Essentials/Essentials";
import Inputs from "./Inputs/Inputs";
import Wallets from "./Wallets/Wallets";
// import Additional from "./Additional/Additional";
import Themes, { Props } from "./Themes/Themes";

const Customize = ({ isDark, setIsDark }: Props) => {
  return (
    <div className="bg-[#121214] border border-slate-700 p-6 rounded-tr-2xl rounded-br-2xl">
      <div className="flex justify-between items-center gap-44">
        <div className="text-slate-300 font-semibold text-xl">Customize</div>
        {/* <div className="text-blue-400 font-medium">Reset</div> */}
      </div>
      <Essentials />
      <Inputs />
      <Wallets />
      {/* <Additional /> */}
      <Themes isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Customize;
