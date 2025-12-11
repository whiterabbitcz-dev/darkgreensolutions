import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
