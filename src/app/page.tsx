"use client";

import { HuddleIframe, iframeApi, useEventListner } from "@huddle01/iframe";
import Customize from "./components/Customize/Customize";

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
      wallets: ["metamask"],
    });
  });

  return (
    <main className="h-screen flex items-center">
      <Customize />
      <div className="aspect-video w-full mx-auto p-4 flex">
        <HuddleIframe
          // roomUrl="http://localhost:3000/"
          roomUrl="https://iframe.huddle01.com/"
          className="w-full aspect-video"
        />
      </div>
    </main>
  );
}
