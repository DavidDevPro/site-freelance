import { About } from "@/components/landing/About";
import { Cta } from "@/components/landing/Cta";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Newsletter } from "@/components/landing/Newsletter";
import { Pricing } from "@/components/landing/Pricing";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/landing/Services";
import Skills from "@/components/landing/Skills";

// import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/landing/Team";

import { UserFeedback } from "@/components/landing/UserFeedback";

function Home() {
  return (
    <>
      <Hero />
      {/* <Sponsors /> */}
      <Features />
      <Pricing />
      <Skills />
      <UserFeedback />
      <Cta />
      <About />
      <HowItWorks />
      <Services />
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
