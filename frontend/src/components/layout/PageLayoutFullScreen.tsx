import { SiteHeader, SiteFooter } from "@/components/layout";

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
      <SiteFooter />
    </>
  );
};
