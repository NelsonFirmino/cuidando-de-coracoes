import { User, Users, ClipboardList } from "lucide-react";

const services = [
  { icon: User, title: "Terapia individual", text: "Acompanhamento contínuo da criança ou adolescente em sessões personalizadas para suas necessidades." },
  { icon: Users, title: "Orientação parental", text: "Encontros com pais e responsáveis para fortalecer vínculos, comunicação e estratégias do dia a dia." },
  { icon: ClipboardList, title: "Avaliação psicológica", text: "Processo cuidadoso de investigação para compreender comportamentos, emoções e habilidades." },
];

export const Servicos = () => (
  <section id="servicos" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div aria-hidden className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-primary/20 blob" />
    <div className="container relative">
      <div className="max-w-2xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Serviços</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
          O cuidado que faz <em className="text-primary-deep">sentido</em> pra sua família.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card/80 backdrop-blur rounded-[2rem] p-8 shadow-card transition-soft hover:bg-card hover:shadow-soft">
            <div className="w-14 h-14 rounded-2xl bg-primary/30 grid place-items-center text-primary-deep">
              <Icon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-display text-2xl">{title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
