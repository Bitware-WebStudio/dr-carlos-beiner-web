import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/react-app/utils/constants';

export default function WhatsAppButton() {


  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:fixed md:block bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Agenda por WhatsApp
      </span>
    </a>
  );
}
