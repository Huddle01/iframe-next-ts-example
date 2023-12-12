"use client";

import { useEffect, useState } from "react";

import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    redirect("/home");
  }, []);

  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4"></div>
    </main>
  );
}
