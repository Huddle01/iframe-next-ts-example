"use client";

import { HuddleIframe, huddleIframe, useEventListner } from "@huddle01/iframe";
import { useEffect, useState } from "react";

export default function Home() {
  const [checkBoxes, setCheckBoxes] = useState({
    gradientAndMesh: true,
    vr: true,
    isCopyMeetingVisible: true,
  });

  const [inputBoxes, setInputBoxes] = useState({
    redirectUrlOnLeave: "",
    background: "",
  });

  const [isAllWallets, setIsAllWallets] = useState(true);

  const initialWallets = {
    metamask: true,
    walletconnect: true,
    phantom: true,
    templewallet: true,
    keplr: true,
    lens: true,
    ud: true,
    cyberconnect: true,
  };
  const falseWallets = {
    metamask: false,
    walletconnect: false,
    phantom: false,
    templewallet: false,
    keplr: false,
    lens: false,
    ud: false,
    cyberconnect: false,
  };

  interface IWallets {
    metamask: boolean;
    walletconnect: boolean;
    phantom: boolean;
    templewallet: boolean;
    keplr: boolean;
    lens: boolean;
    ud: boolean;
    cyberconnect: boolean;
  }

  const [wallets, setWallets] = useState<IWallets>(initialWallets);

  useEventListner("lobby:joined", (data) => {
    console.log({ "lobby:joined": data });
  });
  useEventListner("room:new-peer", (data) => {
    console.log({ "room:new-peer": data });
  });

  useEffect(() => {
    const newWallets = isAllWallets
      ? ["*"]
      : [
          ...(Object.keys(wallets).filter(
            (key) => wallets[key as keyof typeof wallets]
          ) as any),
        ];

    console.log({ newWallets });

    huddleIframe.initialize({
      wallets: newWallets,
    });
  }, [wallets, isAllWallets]);

  return (
    <main className="h-screen">
      <div className="grid grid-cols-4 p-6">
        {Object.keys(checkBoxes).map((key) => (
          <div key={key} className="flex items-center">
            <input
              className="mr-0 h-10 w-10 scale-50"
              type="checkbox"
              name={key}
              checked={checkBoxes[key as keyof typeof checkBoxes]}
              onChange={(e) => {
                setCheckBoxes({
                  ...checkBoxes,
                  [e.target.name]: e.target.checked,
                });
                huddleIframe.initialize({
                  [key]: e.target.checked,
                });
              }}
            />
            <div>{key}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 p-6">
        <button onClick={() => huddleIframe.muteMic()}>Mute</button>
        <button onClick={() => huddleIframe.unmuteMic()}>Unmute</button>
        <button onClick={() => huddleIframe.enableShare()}>enableShare</button>
        <button onClick={() => huddleIframe.disableShare()}>
          disableShare
        </button>
        <button onClick={() => huddleIframe.enableWebcam()}>
          enableWebcam
        </button>
        <button onClick={() => huddleIframe.disableWebcam()}>
          disableWebcam
        </button>
      </div>

      <div className=" gap-2 p-6">
        {Object.keys(inputBoxes).map((key) => (
          <div key={key} className="flex my-2">
            <input
              className="mr-2 bg-transparent outline-none border-b-2 border-gray-500"
              type="text"
              name={key}
              value={inputBoxes[key as keyof typeof inputBoxes]}
              placeholder={key}
              onChange={(e) =>
                setInputBoxes((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <button
              onClick={() =>
                huddleIframe.initialize({
                  [key]: inputBoxes[key as keyof typeof inputBoxes],
                })
              }
            >
              Save
            </button>
          </div>
        ))}
      </div>

      <div className="p-6">Wallets</div>

      <div className="grid grid-cols-3 p-6">
        <div className="flex my-2 items-center">
          <input
            className="mr-0 h-10 w-10 scale-50"
            type="checkbox"
            name={"All"}
            checked={isAllWallets}
            onChange={(e) => {
              setIsAllWallets(e.target.checked);
              setWallets(e.target.checked ? initialWallets : falseWallets);
            }}
          />
          <div>All</div>
        </div>
        {Object.keys(wallets).map((key) => (
          <div key={key} className="flex my-2 items-center">
            <input
              className="mr-0 h-10 w-10 scale-50"
              type="checkbox"
              name={key}
              checked={wallets[key as keyof typeof wallets]}
              onChange={(e) => {
                setWallets({
                  ...wallets,
                  [e.target.name]: e.target.checked,
                });
                setIsAllWallets(false);
              }}
            />
            <div>{key}</div>
          </div>
        ))}
      </div>

      <div className="aspect-video w-full mx-auto p-4">
        <HuddleIframe
          roomUrl="https://iframe.huddle01.com/"
          className="w-full aspect-video"
        />
      </div>
    </main>
  );
}
