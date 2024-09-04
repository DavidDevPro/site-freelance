// components/layout/PageLayout.tsx
import React from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";

interface PageLayoutOneScreenProps {
  children: React.ReactNode;
}

export const PageLayoutOneScreen: React.FC<PageLayoutOneScreenProps> = ({
  children,
}) => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <main className="container  flex-1 overflow-hidden flex justify-center py-10 relative z-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};
