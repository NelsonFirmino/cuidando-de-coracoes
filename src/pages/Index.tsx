import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Atendimentos } from "@/components/site/Atendimentos";
import { Servicos } from "@/components/site/Servicos";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Sobre />
      <Atendimentos />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
