import { SiteFooter, SiteHeader } from "@/components/layout";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

const PrivacyPage = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center ">
        <PrivacyPolicy />
      </div>

      <SiteFooter />
    </div>
  );
};

export default PrivacyPage;
