"use client";

import { HuddleIframe, api } from "iframe";
import { useEffect } from "react";

export default function Home() {
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
      <div>
        <button
          onClick={() =>
            api.initialize({
              gradientAndMesh: true,
            })
          }
        >
          Gradient
        </button>
        <br />
        <button
          onClick={() =>
            api.initialize({
              gradientAndMesh: false,
            })
          }
        >
          No Gradient
        </button>
        <button onClick={() => api.muteMic()}>Mute</button>
        <button onClick={() => api.unmuteMic()}>Unmute</button>
        <button onClick={() => api.enableShare()}>enableShare</button>
        <button onClick={() => api.disableShare()}>disableShare</button>
        <button onClick={() => api.enableWebcam()}>.enableWebcam</button>
        <button onClick={() => api.disableWebcam()}>.disableWebcam</button>
        <div>
          {/* <input type="text" placeholder="Background Url" /> */}
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
      </div>
      <div className="aspect-video w-full mx-auto  p-4">
        <HuddleIframe
          config={{}}
          roomUrl="http://localhost:3000"
          // height="100%"
          // width="100%"
          className="w-full aspect-video"
        />
      </div>
    </main>
  );
}
