import React, { useEffect, useState } from "react";
import { TReaction, reactions } from "@huddle01/iframe/types";
import { iframeApi } from "@huddle01/iframe";

const Controls = () => {
  const [checkBoxes, setCheckBoxes] = useState({
    gradientAndMesh: true,
    isCopyMeetingVisible: true,
    vr: true,
  });

  const [inputBoxes, setInputBoxes] = useState({
    redirectUrlOnLeave: "",
    background: "",
  });

  const [avatarUrl, setAvatarUrl] = useState("");
  const [reaction, setReaction] = useState<TReaction>("🔥");

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

  useEffect(() => {
    const newWallets = isAllWallets
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
  }, [wallets, isAllWallets]);

  return (
    <div className="w-fit bg-zinc-900 py-4 rounded-lg">
      <div className="px-6 text-2xl">Control Panel</div>

      <div className="grid grid-cols-2 p-6">
        {Object.keys(checkBoxes).map((key) => (
          <div key={key} className="flex items-center">
            <input
              className="mr-3 h-5 w-5"
              type="checkbox"
              name={key}
              checked={checkBoxes[key as keyof typeof checkBoxes]}
              onChange={(e) => {
                setCheckBoxes({
                  ...checkBoxes,
                  [e.target.name]: e.target.checked,
                });
                iframeApi.initialize({
                  [key]: e.target.checked,
                });
              }}
            />
            <div>{key}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 p-6">
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.muteMic()}
        >
          Mute
        </button>
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.unmuteMic()}
        >
          Unmute
        </button>
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.enableShare()}
        >
          enableShare
        </button>
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.disableShare()}
        >
          disableShare
        </button>
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.enableWebcam()}
        >
          enableWebcam
        </button>
        <button
          className="py-2 hover:opacity-75 rounded-lg"
          onClick={() => iframeApi.disableWebcam()}
        >
          disableWebcam
        </button>
      </div>
      <div className="py-4 px-6">Inputs</div>
      <div className="gap-2 px-6 pb-6">
        {Object.keys(inputBoxes).map((key) => (
          <div key={key} className="flex my-2 gap-4">
            <input
              className="flex-1 mr-2 bg-transparent outline-none border-b-2 border-gray-500"
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
              className="py-2 px-10 rounded-lg hover:opacity-75"
              onClick={() =>
                iframeApi.initialize({
                  [key]: inputBoxes[key as keyof typeof inputBoxes],
                })
              }
            >
              Save
            </button>
          </div>
        ))}
        <div className="flex my-2 gap-4">
          <input
            className="flex-1 mr-2 bg-transparent outline-none border-b-2 border-gray-500"
            type="text"
            name={"avatarUrl"}
            value={avatarUrl}
            placeholder="avatarUrl"
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
          <button
            className="py-2 px-10 rounded-lg hover:opacity-75"
            onClick={() => iframeApi.changeAvatarUrl(avatarUrl)}
          >
            Save
          </button>
        </div>
        <div className="flex my-2 gap-4">
          <select
            value={reaction}
            onChange={(e) => setReaction(e.target.value as TReaction)}
            className="flex-1  mr-2 bg-transparent outline-none border-b-2 border-gray-500"
          >
            {reactions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-10 rounded-lg hover:opacity-75"
            onClick={() => iframeApi.sendReaction(reaction)}
          >
            Send
          </button>
        </div>
      </div>
      <div className="py-4 px-6">Wallets</div>
      <div className="grid grid-cols-2 px-6">
        <div className="flex my-2 items-center">
          <input
            className="mr-3 h-5 w-5"
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
              className="mr-3 h-5 w-5"
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
    </div>
  );
};

export default Controls;
