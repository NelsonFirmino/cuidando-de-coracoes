import { MessageCircle } from "lucide-react";

const WHATSAPP = "5500000000000";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Talita! Gostaria de agendar uma conversa.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(150_55%_50%)] animate-ping opacity-30" />
    <span className="relative grid place-items-center w-16 h-16 rounded-full bg-[hsl(150_55%_45%)] text-white shadow-petal hover:scale-110 transition-soft">
      <MessageCircle className="w-7 h-7" strokeWidth={1.8} />
    </span>
  </a>
);
