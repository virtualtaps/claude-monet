import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Specialists from "@/components/Specialists";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Specialists />
      <Gallery />
      <Blog />
      <Appointment />
      <Contact />
    </>
  );
}
