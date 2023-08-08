import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Checkbox from "./Checkbox";
import CheckboxWithName from "./CheckboxWithName";
import { iframeApi } from "@huddle01/iframe";

interface IWallets {
  metamask: boolean;
  walletconnect: boolean;
  phantom: boolean;
  // templewallet: boolean;
  keplr: boolean;
  lens: boolean;
  ud: boolean;
  cyberconnect: boolean;
}

const Wallets = () => {
  const initialWallets = {
    metamask: true,
    walletconnect: true,
    phantom: true,
    // templewallet: true,
    keplr: true,
    lens: true,
    ud: true,
    cyberconnect: true,
    beacon: true,
    okxwallet: true,
  };

  const walletNames = {
    keplr: "Keplr",
    metamask: "Metamask",
    walletconnect: "WalletConnect",
    phantom: "Phantom",
    // templewallet: "Temple",
    lens: "Lens",
    ud: "UD",
    cyberconnect: "CyberConnect",
    beacon: "Beacon",
    okxwallet: "OKX Wallet",
  };

  const [wallets, setWallets] = useState<IWallets>(initialWallets);

  const [all, setAll] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallets((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    setAll(false);
  };

  useEffect(() => {
    const newWallets = all
      ? ["*"]
      : [
          ...(Object.keys(wallets).filter(
            (key) => wallets[key as keyof typeof wallets]
          ) as any),
        ];

    console.log({ newWallets });

    iframeApi.initialize({
      wallets: newWallets,
    });
  }, [wallets, all]);

  return (
    <Section title="Wallets & DIDs">
      <div className="grid grid-cols-2 gap-3 border border-slate-700 p-4 rounded-lg">
        <CheckboxWithName
          title={"All"}
          checked={all}
          onChange={(e) => {
            e.target.checked && setWallets(initialWallets);
            setAll((prev) => !prev);
          }}
        />
        {Object.entries(walletNames).map(([key, name]) => (
          <CheckboxWithName
            key={key}
            title={name}
            checked={wallets[key as keyof typeof wallets]}
            onChange={onChange}
            name={key}
          />
        ))}
      </div>
    </Section>
  );
};

export default Wallets;
