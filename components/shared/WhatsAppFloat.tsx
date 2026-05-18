import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_MESSAGES, AREA_WHATSAPP } from "@/lib/constants";

interface WhatsAppFloatProps {
  area?: keyof typeof WHATSAPP_MESSAGES;
}

export function WhatsAppFloat({ area = "geral" }: WhatsAppFloatProps) {
  const message = WHATSAPP_MESSAGES[area];
  const link = getWhatsAppLink(message, AREA_WHATSAPP[area]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1da851] hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 group"
    >
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs group-focus-visible:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-4 group-focus-visible:pl-4 text-sm font-semibold">
        Fale pelo WhatsApp
      </span>
      <span className="p-4">
        <MessageCircle size={26} aria-hidden fill="currentColor" />
      </span>
    </a>
  );
}
