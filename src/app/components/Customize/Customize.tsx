import React from "react";
import Essentials from "./Essentials/Essentials";
import Inputs from "./Inputs/Inputs";
import Wallets from "./Wallets/Wallets";

const Customize = () => {
  return (
    <div className="bg-[#121214] border border-slate-700 p-6 rounded-tr-2xl rounded-br-2xl">
      <div className="flex justify-between items-center gap-44">
        <div className="text-slate-300 font-semibold text-xl">Customize</div>
        <div className="text-blue-400 font-medium">Reset</div>
      </div>
      <Essentials />
      <Inputs />
      <Wallets />
    </div>
  );
};

export default Customize;
