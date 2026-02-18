import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Commitment } from "@/components/Commitment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <FAQ />
        <Commitment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
