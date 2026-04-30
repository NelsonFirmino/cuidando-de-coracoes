const groups = [
  {
    age: "3 – 10",
    title: "Crianças",
    color: "bg-primary/30",
    text: "Através do brincar, do desenho e da contação de histórias, criamos um espaço onde a criança consegue expressar o que ainda não tem palavras para dizer.",
  },
  {
    age: "11 – 13",
    title: "Pré-adolescentes",
    color: "bg-lilac/70",
    text: "Uma fase de transformações intensas. Ofereço escuta atenta para inseguranças, amizades, rotina escolar e novas descobertas.",
  },
  {
    age: "14 – 18",
    title: "Adolescentes",
    color: "bg-accent",
    text: "Um espaço respeitoso e sem julgamentos para falar sobre identidade, ansiedade, relacionamentos e o caminho da vida adulta.",
  },
];

export const Atendimentos = () => (
  <section id="atendimentos" className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-2xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Atendimentos</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
          Cada idade tem<br /> sua <em className="text-primary-deep">própria linguagem.</em>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          A terapia se adapta à fase do desenvolvimento — com ferramentas e conversas
          que fazem sentido para cada momento da vida.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <article
            key={g.title}
            className="group relative bg-card rounded-[2rem] p-8 shadow-card transition-soft hover:shadow-petal hover:-translate-y-2"
          >
            <div className={`w-20 h-20 ${g.color} blob grid place-items-center font-display text-xl text-foreground transition-soft group-hover:rotate-6`}>
              {g.age}
            </div>
            <h3 className="mt-6 font-display text-2xl">{g.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{g.text}</p>
            <span className="absolute top-6 right-6 text-6xl font-display text-foreground/5 select-none">0{i + 1}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);
