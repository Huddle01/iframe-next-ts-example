"use client";

import { useState } from "react";
import cn from "clsx";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const createRoom = async () => {
    const res = await fetch("/api/room");
    const data = await res.json();
    if (data.roomId) {
      router.push(`/${data.roomId}`);
    }
  };

  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4">
        <input
          className="bg-transparent border border-slate-400 px-4 py-3 outline-none rounded-md"
          type="text"
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          disabled={!roomId}
          type="button"
          className={cn(
            "bg-blue-500 x-4 py-3 px-4 rounded-md",
            !roomId && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => roomId && router.push(`/${roomId}`)}
        >
          Start Meeting
        </button>
        <button
          type="button"
          className={cn("bg-blue-500 x-4 py-3 px-4 rounded-md")}
          onClick={createRoom}
        >
          Create Meeting
        </button>
      </div>
    </main>
  );
}
