import { Heart, Instagram } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background/90">
    <div className="container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <p className="font-display text-2xl">Talita Firmino</p>
        <p className="text-sm text-background/60 mt-1">Psicóloga · CRP 00000</p>
        <p className="mt-6 text-sm text-background/70 max-w-xs leading-relaxed">
          Cuidado emocional para crianças e adolescentes, com escuta acolhedora e olhar profissional.
        </p>
      </div>
      <div>
        <p className="font-display text-lg">Navegação</p>
        <ul className="mt-4 space-y-2 text-sm text-background/70">
          <li><a href="#sobre" className="hover:text-background transition-soft">Sobre</a></li>
          <li><a href="#atendimentos" className="hover:text-background transition-soft">Atendimentos</a></li>
          <li><a href="#servicos" className="hover:text-background transition-soft">Serviços</a></li>
          <li><a href="#contato" className="hover:text-background transition-soft">Contato</a></li>
        </ul>
      </div>
      <div>
        <p className="font-display text-lg">Redes</p>
        <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-soft">
          <Instagram className="w-4 h-4" /> @talita.firmino.psi
        </a>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between text-xs text-background/60">
        <p>© {new Date().getFullYear()} Talita Firmino. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1.5 mt-2 md:mt-0">
          Feito com <Heart className="w-3.5 h-3.5 fill-current text-primary" /> para acolher
        </p>
      </div>
    </div>
  </footer>
);
