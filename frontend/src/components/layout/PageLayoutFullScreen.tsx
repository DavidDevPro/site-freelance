import React from "react";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { ScrollToTop } from "@/components/shared";

interface PageLayoutFullScreenProps {
  children: React.ReactNode;
}

export const PageLayoutFullScreen: React.FC<PageLayoutFullScreenProps> = ({
  children,
}) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <ScrollToTop />
      <SiteFooter />
    </>
  );
};
