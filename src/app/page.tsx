import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Innovation } from "@/components/Innovation";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#061b31]">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
