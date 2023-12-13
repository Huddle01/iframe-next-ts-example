"use client";

import { HuddleIframe, iframeApi, useEventListner } from "@huddle01/iframe";
import { darkTheme } from "@huddle01/iframe/types";
import Customize from "../components/Customize/Customize";
import HuddleLogo from "../components/HuddleLogo";
import DocBtn from "../components/DocBtn";

import { usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const pathname = usePathname();

  useEventListner("room:recording-started", () => {
    console.log("room:recording-started");
  });
  useEventListner("room:recording-stopping", () => {
    console.log("room:recording-stopping");
  });
  useEventListner("room:recording-stopped", (data) => {
    console.log({ "room:recording-stopped": data });
  });

  useEventListner("app:initialized", () => {
    console.log("app:initialized");

    iframeApi.initialize({
      redirectUrlOnLeave: "https://huddle01.com",
    });

    console.log("iframeeee", { token, pathname: pathname.split("/")[1] });

    token && iframeApi.connectWallet(token);
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
            // roomUrl={`https://iframe.huddle01.com/${pathname.split("/")[1]}`}
            roomUrl={`http://localhost:3000/${pathname.split("/")[1]}`}
            className="w-full aspect-video"
            theme={darkTheme}
          />
        </div>
      </div>
    </main>
  );
}
