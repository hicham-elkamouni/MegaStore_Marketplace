import type { NextPage } from "next";
import React from "react";


export function IndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="m-4 p-4 border-[16px] border-green-300">
      <p>ytrertyuio</p>
      {children}
      
      </main>
  );
}
