import React, { useState } from "react";
import { NavBar } from "./";

export const SiteHeader: React.FC = () => {
  const [mode] = useState<"light" | "dark">("dark");
  return (
    <header
      className={`${
        mode === "light" ? "shadow-light" : "shadow-dark"
      } sticky w-full top-0 z-50 bg-card shadow-md border-b`}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center px-4 py-2">
        <NavBar />
      </div>
    </header>
  );
};
