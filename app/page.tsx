import Hero from "@/components/hero/Hero";
import Spinner from "@/components/spinner/Spinner";
import dynamic from "next/dynamic";

const LazySection = dynamic(() => import("@/components/section/Section"), {
  loading: () => <Spinner />,
});

const LazySection1 = dynamic(() => import("@/components/section/Section1"), {
  loading: () => <Spinner />,
});

const LazyTestimonials = dynamic(() => import("@/components/testimonials/Testimonials"), {
  loading: () => <Spinner />,
});

const LazyNews = dynamic(() => import("@/components/news/News"), {
  loading: () => <Spinner />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <LazySection />
      <LazySection1 />
      <LazyTestimonials />
      <LazyNews />
    </>
  );
}
