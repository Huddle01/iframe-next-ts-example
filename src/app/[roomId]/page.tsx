"use client";

import { HuddleIframe, iframeApi, useEventListner } from "@huddle01/iframe";
import { darkTheme, lightTheme } from "@huddle01/iframe/types";
import Customize from "../components/Customize/Customize";
import HuddleLogo from "../components/HuddleLogo";
import DocBtn from "../components/DocBtn";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { roomId: string } }) {
  const [isDark, setIsDark] = useState(true);

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
        <Customize setIsDark={setIsDark} isDark={isDark} />
        <div className="aspect-video w-full mx-auto p-4 flex">
          <HuddleIframe
            // if you add autojoin = true, skips the lobby and goes directly to the room
            roomUrl={`https://iframe.huddle01.com/${params.roomId}/lobby?displayName=axitdoteth&autojoin=true`}
            // if you don't add displayName, you'll be directed to the lobby
            // roomUrl={`https://iframe.huddle01.com/${params.roomId}/`}
            className="w-full aspect-video"
            theme={isDark ? darkTheme : lightTheme}
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
          />
        </div>
      </div>
    </main>
  );
}
