"use client";

import { HuddleIframe, iframeApi, useEventListner } from "@huddle01/iframe";
import Customize from "./components/Customize/Customize";
import HuddleLogo from "./components/HuddleLogo";
import DocBtn from "./components/DocBtn";

export default function Home() {
  useEventListner("lobby:joined", (data) => {
    console.log({ "lobby:joined": data });
  });
  useEventListner("room:new-peer", (data) => {
    console.log({ "room:new-peer": data });
  });

  useEventListner("lobby:initialized", () => {
    iframeApi.initialize({
      redirectUrlOnLeave: "https://huddle01.com",
      background: "https://picsum.photos/1920/1080?blur=2",
    });
  });

  return (
    <main className="h-screen flex items-center flex-col">
      <div className="flex items-center justify-between w-full py-3 px-6">
        <HuddleLogo />
        <DocBtn />
      </div>
      <div className="flex items-center w-full flex-1">
        <Customize />
        <div className="aspect-video w-full mx-auto p-4 flex">
          <HuddleIframe
            roomUrl="https://iframe.huddle01.com/ntp-gmck-vrg"
            // roomUrl="http://localhost:3000/fmr-mwne-pgb/"
            // roomUrl="https://iframe.huddle01.com/"
            className="w-full aspect-video"
          />
        </div>
      </div>
    </main>
  );
}
