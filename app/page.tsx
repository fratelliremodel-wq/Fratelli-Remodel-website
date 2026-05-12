import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EmotionalHook from "@/components/EmotionalHook";
import HowWeRemodel from "@/components/HowWeRemodel";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CraftsmanshipStrip from "@/components/CraftsmanshipStrip";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import InstagramSection from "@/components/InstagramSection";
import About from "@/components/About";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <EmotionalHook />
      <HowWeRemodel />
      <Services />
      <WhyChooseUs />
      <CraftsmanshipStrip />
      <Process />
      <Portfolio />

      {/* Mid-page CTA — after seeing the work */}
      <div className="bg-[#F2EDE6] pb-20 px-6 text-center">
        <p className="text-[#4A4A4A] text-sm mb-4">Ready to start your project?</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 bg-[#8B6F47] text-white text-sm font-semibold tracking-wide rounded hover:bg-[#7A6040] transition-colors"
        >
          Start the Conversation
        </a>
      </div>

      <BeforeAfter />
      <InstagramSection />
      <About />
      <TrustSection />
      <Testimonials />

      {/* Post-testimonial CTA — after social proof */}
      <div className="bg-[#1A1A1A] pb-20 px-6 text-center">
        <p className="text-white/50 text-sm mb-4">Ready to experience this yourself?</p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 bg-[#8B6F47] text-white text-sm font-semibold tracking-wide rounded hover:bg-[#7A6040] transition-colors"
        >
          Start the Conversation
        </a>
      </div>

      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />

      {/* Sticky mobile bottom bar */}
      <MobileCtaBar />
    </main>
  );
}
