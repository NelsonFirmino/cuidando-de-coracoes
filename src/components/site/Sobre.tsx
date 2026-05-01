import { GraduationCap, Heart, BookOpen } from "lucide-react";

export const Sobre = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/40">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Sobre</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Um espaço pensado<br /> com <em className="text-primary-deep">carinho</em> e técnica.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p>
            Sou <strong className="font-medium text-foreground">Talita Firmino</strong>, psicóloga
            dedicada ao acompanhamento emocional de crianças, pré-adolescentes e adolescentes.
            Acredito que cada criança carrega um universo único, e meu trabalho é criar uma ponte
            entre esse mundo interno e a família.
          </p>
          <p>
            Atuo de forma humanizada, lúdica e baseada em evidências, oferecendo um lugar seguro
            onde sentimentos podem ser nomeados, compreendidos e transformados.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            {[
              { icon: GraduationCap, title: "Formação", text: "Graduação em Psicologia · CRP 17/3952" },
              { icon: BookOpen, title: "Especializações", text: "Terapia Cognitivo-Comportamental Infantil e Adolescente" },
              { icon: Heart, title: "Abordagem", text: "Lúdica, integrativa e centrada na família" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card rounded-3xl p-5 shadow-card transition-soft hover:-translate-y-1 hover:shadow-soft">
                <Icon className="w-6 h-6 text-primary-deep" strokeWidth={1.5} />
                <p className="mt-3 font-display text-lg">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
