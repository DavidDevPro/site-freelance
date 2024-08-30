import { SiteFooter, SiteHeader } from "@/components/layout";
import LegalMentions from "@/components/legal/LegalMentions";

const LegalPage: React.FC = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center  ">
        <LegalMentions />
      </div>
      <SiteFooter />
    </div>
  );
};

export default LegalPage;
