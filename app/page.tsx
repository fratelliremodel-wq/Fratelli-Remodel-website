import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowWeRemodel from "@/components/HowWeRemodel";
import Services from "@/components/Services";
import WhatGoesWrong from "@/components/WhatGoesWrong";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <HowWeRemodel />
      <Services />
      <WhatGoesWrong />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <BeforeAfter />
      <About />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
