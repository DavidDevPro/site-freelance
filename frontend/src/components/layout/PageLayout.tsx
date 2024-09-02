// components/layout/PageLayout.tsx
import React from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden flex justify-center">
        <div className="absolute inset-0 overflow-hidden"></div>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
