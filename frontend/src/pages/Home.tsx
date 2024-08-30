import {
  About,
  Cta,
  FAQ,
  Features,
  Hero,
  Pricing,
  UserFeedback,
} from "@/components/landing/";

// import { HowItWorks } from "@/components/landing/HowItWorks";
// import { Newsletter } from "@/components/landing/Newsletter";

// import { Services } from "@/components/landing/Services";
// import Skills from "@/components/landing/Skills";

// import { Sponsors } from "@/components/Sponsors";
// import { Team } from "@/components/landing/Team";

import { SiteFooter, SiteHeader } from "@/components/layout";
import { ScrollToTop } from "@/components/shared";

const HomePage = () => {
  return (
    <>
      <SiteHeader />
      <Hero />
      {/* <Sponsors /> */}
      <Features />
      <Pricing />
      {/* <Skills /> */}
      <UserFeedback />
      <About />
      <Cta />
      {/* <HowItWorks /> */}
      {/* <Services /> */}
      {/* <Team /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <SiteFooter />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
