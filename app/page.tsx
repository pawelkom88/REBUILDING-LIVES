import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import News from "@/components/news/News";
import Section from "@/components/section/Section";
import Section1 from "@/components/section/Section1";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <Section1 />
      <Testimonials />
      <News />
      <Footer />
    </>
  );
}
