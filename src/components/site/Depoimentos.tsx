const items = [
  { text: "Minha filha sempre foi tímida e tinha dificuldade na escola. Em poucos meses, vimos uma transformação enorme — hoje ela conta com mais confiança o que sente.", who: "Mãe de M., 8 anos" },
  { text: "A Talita acolheu meu filho adolescente de um jeito que ninguém conseguiu. Ele finalmente encontrou um espaço dele, sem julgamento.", who: "Pai de J., 15 anos" },
  { text: "Recebemos orientações claras e práticas. A terapia também mudou a forma como nos comunicamos em casa.", who: "Mãe de L., 5 anos" },
];

export const Depoimentos = () => (
  <section id="depoimentos" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Depoimentos</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
          Histórias que <em className="text-primary-deep">florescem</em>.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <figure
            key={i}
            className="bg-card rounded-[2rem] p-8 shadow-card transition-soft hover:shadow-soft relative"
          >
            <span className="font-display text-7xl text-primary/40 leading-none absolute top-4 left-6 select-none">“</span>
            <blockquote className="relative pt-6 text-foreground/80 leading-relaxed">
              {it.text}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">— {it.who}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
