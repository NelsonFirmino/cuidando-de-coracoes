import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* organic blobs */}
      <div aria-hidden className="absolute -top-20 -left-20 w-[28rem] h-[28rem] bg-primary/30 blob animate-float-slow opacity-70" />
      <div aria-hidden className="absolute top-40 -right-32 w-[32rem] h-[32rem] bg-lilac/60 blob-2 animate-float-slow opacity-60" style={{ animationDelay: "2s" }} />
      <div aria-hidden className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/50 blob opacity-50" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-card text-xs tracking-widest uppercase text-primary-deep">
            <Sparkles className="w-3.5 h-3.5" /> Psicologia para 3 a 18 anos
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Cuidando do<br />
            <em className="text-primary-deep not-italic">desenvolvimento</em><br />
            <span className="italic font-normal text-primary-deep">emocional</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Da infância à adolescência, um espaço seguro para escutar, acolher
            e transformar. Com escuta atenta e olhar carinhoso para cada fase.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">Agendar consulta</a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#sobre">Conhecer Talita</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-3xl text-foreground">+8</p>
              <p>anos de prática</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl text-foreground">300+</p>
              <p>famílias acolhidas</p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <p className="font-display text-3xl text-foreground">3–18</p>
              <p>anos de idade</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-petal blob shadow-petal -rotate-3" />
          <img
            src={new URL("../../assets/talita-firmino.jpg", import.meta.url).href}
            alt="Talita Firmino, psicóloga infantil e adolescente, sentada em seu consultório acolhedor"
            className="relative w-full h-[34rem] md:h-[38rem] object-cover blob shadow-petal"
            loading="eager"
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-3xl p-4 shadow-card flex items-center gap-3 max-w-[16rem]">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-accent-foreground text-xl">♡</span>
            <div className="text-sm leading-snug">
              <p className="font-display text-base">Escuta · Acolhe · Transforma</p>
              <p className="text-xs text-muted-foreground">Um cuidado para cada idade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
