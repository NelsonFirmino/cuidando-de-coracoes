import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP = "+5584998172919";

export const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Talita! Sou ${form.name}.\n\n${form.message}\n\nMeu e-mail: ${form.email}`,
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] bg-lilac/40 blob" />
      <div className="container relative grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-primary-deep">Contato</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Vamos conversar?<br /> <em className="text-primary-deep">Estou aqui</em> para ouvir.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-md">
            Envie uma mensagem e em breve retornarei com carinho. Seu primeiro passo já é coragem.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-primary/30 grid place-items-center text-primary-deep">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                <a href={`https://wa.me/${WHATSAPP}`} className="font-display text-lg hover:text-primary-deep transition-soft">
                  (00) 00000-0000
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-accent grid place-items-center text-accent-foreground">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">E-mail</p>
                <p className="font-display text-lg">contato@talitafirmino.com</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-lilac grid place-items-center text-lilac-foreground">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Consultório</p>
                <p className="font-display text-lg">Atendimento online e presencial</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-sky grid place-items-center text-sky-foreground">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Horários</p>
                <p className="font-display text-lg">Seg a Sex · 8h às 19h</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-[2rem] p-8 md:p-10 shadow-petal space-y-5"
        >
          <div>
            <label className="text-sm text-foreground/80">Seu nome</label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 rounded-2xl h-12 bg-background"
              placeholder="Como posso te chamar?"
            />
          </div>
          <div>
            <label className="text-sm text-foreground/80">E-mail</label>
            <Input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 rounded-2xl h-12 bg-background"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-foreground/80">Mensagem</label>
            <Textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 rounded-2xl bg-background min-h-[140px]"
              placeholder="Conte um pouco do que você procura..."
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="w-full">
            Enviar mensagem
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Suas informações serão tratadas com sigilo e respeito.
          </p>
        </form>
      </div>
    </section>
  );
};
