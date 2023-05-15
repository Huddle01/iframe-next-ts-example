"use client";

import { HuddleIframe, api } from "@huddle01/iframe";
import { useEffect, useState } from "react";

export default function Home() {
  const [checkBoxes, setCheckBoxes] = useState({
    gradientAndMesh: true,
    vr: true,
    wallet: true,
    isCopyMeetingVisible: true,
  });

  const [inputBoxes, setInputBoxes] = useState({
    redirectUrlOnLeave: "",
  });

  useEffect(() => {
    const handleIframe = (event: MessageEvent<any>) => {
      if (event.data.type !== "huddle01-iframe-from-iframe") return;

      console.info({ type: "iframe-event-parent", data: event?.data });
    };

    window.addEventListener("message", handleIframe);

    return () => {
      window.removeEventListener("message", handleIframe);
    };
  }, []);

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
                api.initialize({
                  [key]: e.target.checked,
                });
              }}
            />
            <div>{key}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 p-6">
        <button onClick={() => api.muteMic()}>Mute</button>
        <button onClick={() => api.unmuteMic()}>Unmute</button>
        <button onClick={() => api.enableShare()}>enableShare</button>
        <button onClick={() => api.disableShare()}>disableShare</button>
        <button onClick={() => api.enableWebcam()}>enableWebcam</button>
        <button onClick={() => api.disableWebcam()}>disableWebcam</button>
        <button
          onClick={() =>
            api.initialize({
              background:
                "bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://picsum.photos/1920/1080')] bg-cover",
            })
          }
        >
          Add Background
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
                api.initialize({
                  [key]: inputBoxes[key as keyof typeof inputBoxes],
                })
              }
            >
              submit
            </button>
          </div>
        ))}
      </div>

      <div className="aspect-video w-full mx-auto  p-4">
        <HuddleIframe
          config={{}}
          roomUrl="https://axit.huddle01.com/"
          className="w-full aspect-video"
        />
      </div>
    </main>
  );
}
