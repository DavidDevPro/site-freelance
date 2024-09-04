import {
  About,
  Cta,
  FAQ,
  Hero,
  Services,
  UserFeedback,
} from "@/components/landing/";
import { Package } from "@/components/landing/package/Package";

// import { HowItWorks } from "@/components/landing/HowItWorks";
// import { Newsletter } from "@/components/landing/Newsletter";

// import { Services } from "@/components/landing/Services";
// import Skills from "@/components/landing/Skills";

// import { Sponsors } from "@/components/Sponsors";
// import { Team } from "@/components/landing/Team";

import { PageLayoutFullScreen } from "@/components/layout";

const HomePage = () => {
  return (
    <PageLayoutFullScreen>
      <Hero />
      {/* <Sponsors /> */}
      <Services />
      <Package />
      {/* <Skills /> */}
      <UserFeedback />
      <About />
      <Cta />
      {/* <HowItWorks /> */}
      {/* <Services /> */}
      {/* <Team /> */}
      {/* <Newsletter /> */}
      <FAQ />
    </PageLayoutFullScreen>
  );
};

export default HomePage;
