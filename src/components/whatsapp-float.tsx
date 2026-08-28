import { MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/data/products";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_PRIMARY}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Tonif-trend.ng on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_12px_30px_-8px_oklch(0.62_0.16_148_/_0.6)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" strokeWidth={1.5} />
    </a>
  );
}
