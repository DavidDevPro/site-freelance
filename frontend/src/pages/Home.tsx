import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import Skills from "@/components/Skills";

// import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";

import { UserFeedback } from "@/components/UserFeedback";

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
