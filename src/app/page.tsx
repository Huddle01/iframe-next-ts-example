"use client";

import { HuddleIframe, iframeApi, useEventListner } from "@huddle01/iframe";
import Controls from "./components/Controls";

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
      background: "https://cdn.wallpapersafari.com/43/49/KCAD4F.jpg",
      wallets: ["metamask"],
    });
  });

  return (
    <main className="h-screen flex items-center">
      <Controls />
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
