import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { Eco } from "@/components/Eco";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Eco />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
