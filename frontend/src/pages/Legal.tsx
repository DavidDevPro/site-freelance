import { PageLayoutFullScreen } from "@/components/layout";
import { LegalMentions } from "@/components/legal/LegalMentions";

const LegalPage: React.FC = () => {
  return (
    <PageLayoutFullScreen>
      <LegalMentions />
    </PageLayoutFullScreen>
  );
};

export default LegalPage;
