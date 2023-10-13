"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const fetcher = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = (await res.json()).roomId
    return data
  } catch (error) {
    
    throw error;
  }
}

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [roomData, setRoomData] = useState<string | null>();
  useEffect(() => {
    fetcher('/api/room').then((data) => { 
    setRoomData(data); 
    })
    .catch(error=>{
      console.log(error);
    })
    ;
  }, []);

  useEffect(() => {    
    if (roomData) {
      router.push(`/${roomData}`)
    } 
  }, [roomData])
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-transparent"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => {
            roomId && router.push(`/${roomId}`);
          }}
        >
          Enter Room
        </button>
      </div>
    </main>
  );
}
