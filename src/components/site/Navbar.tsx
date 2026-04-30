import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimentos", label: "Atendimentos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary/30 text-primary-deep transition-soft group-hover:bg-primary/50">
            <Heart className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg">Talita Firmino</p>
            <p className="text-xs text-muted-foreground tracking-wide">Psicóloga · CRP 00000</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-primary-deep transition-soft">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="default" asChild className="hidden lg:inline-flex">
          <a href="#contato">Agendar consulta</a>
        </Button>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-secondary transition-soft"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <a href="#contato" onClick={() => setOpen(false)}>Agendar consulta</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
