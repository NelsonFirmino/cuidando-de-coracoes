import { Calendar, MessageCircle, Sparkles, Repeat, Monitor } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Primeiro contato", text: "Conversamos por mensagem para entender a demanda e marcar a primeira sessão." },
  { icon: Calendar, title: "Acolhimento inicial", text: "Encontro com os responsáveis (e a criança/adolescente) para conhecer a história." },
  { icon: Sparkles, title: "Plano terapêutico", text: "Definimos juntos os objetivos e o caminho que faz sentido para cada caso." },
  { icon: Repeat, title: "Sessões regulares", text: "Encontros semanais de 50 minutos, com devolutivas periódicas à família." },
];

export const ComoFunciona = () => (
  <section id="como-funciona" className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Como funciona</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Um caminho<br /> <em className="text-primary-deep">leve</em> e claro.
          </h2>
          <div className="mt-8 inline-flex items-center gap-3 bg-sky/60 text-sky-foreground rounded-full px-5 py-3 text-sm">
            <Monitor className="w-4 h-4" /> Atendimento online e presencial
          </div>
        </div>

        <ol className="lg:col-span-8 space-y-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="group flex gap-6 bg-card rounded-3xl p-6 md:p-8 shadow-card transition-soft hover:shadow-soft hover:-translate-y-0.5">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-accent grid place-items-center text-accent-foreground transition-soft group-hover:rotate-6">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-display text-2xl">{title}</h3>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
