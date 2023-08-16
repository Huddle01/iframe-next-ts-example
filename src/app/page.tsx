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
    iframeApi.connectWallet(
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlNmZhZjBjLTFlNTItNDk2ZS05YWIyLTQ4ZTgwZGZmZTVmOCIsImFkZHJlc3MiOiIweDE1OTAwYzY5OGVlMzU2ZTY5NzZlNTY0NTM5NGYwMjdmMDcwNGM4ZWIiLCJjaGFpbiI6ImV0aGVyZXVtIiwid2FsbGV0VHlwZSI6Im1ldGFtYXNrIiwiaWF0IjoxNjkyMjE2NjY1LCJleHAiOjE2OTIyMjc0NjV9.v2vY3DPGdBd_pM_ndx5fhd9PEdxY3bEKZLHBvNJQk68ghAzhScLvWu9dA8C9j55_9IoxjwHyD7m42BvF9VYe4XLuWPO2XNUny3HgtTTCZgHwIq5T707LNnnmGnDXewQtX1mQmZJtgV7sbCNwjlzYzVcot1KI39mCadaaJkQeKKfZ0sj48-cdYTjghhaphkuJZj0iRmaYBqL0wQKKbprfh5EyTTRPTNJ7M-GNd0-FK4q6LgAV4YlheShS7YaCi8N2egceK2_Ro1hONUo_hObR0QGotHcqH_rX-S13V0sWJy_4qAvfz-QDqsExlNT27Xo970br6sicrqIL10zAICglBE_FV2fd6SjbOK0wKtym4AKYgO2rK4hIsWoLcroEKJfqFR1WsbqhY4JYJg_C8YZl81J7D3afg66KX9xzjezjmE1UbsFzSJFhHEUlheOISfO4inmGYZ96siaEKQxQSyHd06h2pn5gPPZGJA3JNB-LzX1TIIiWPqZvOLRB1WN5Yfcw9eS_aZk0nRuC0ZspvQQrbsUSxTTApstanif22nUZ2WPmRASljFLP9P1S6A41WPQUjK_mJMq18DnggFbJ6F9azWll7V23E9LkgNNeArtTD6dCjhXFj28KDDj1fY6ZHdwRBI9QNaz-dzzVP6mpfvP0tm7SYVYE_khvV6b8dtEU2yY"
    );
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
            // roomUrl="https://iframe.huddle01.com/ntp-gmck-vrg"
            roomUrl="http://localhost:3000/fmr-mwne-pgb/"
            // roomUrl="https://iframe.huddle01.com/"
            className="w-full aspect-video"
          />
        </div>
      </div>
    </main>
  );
}
