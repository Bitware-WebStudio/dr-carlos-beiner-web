import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/react-app/utils/constants';

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-neutral-200 shadow-lg p-3 md:hidden">
            <div className="flex space-x-3">
                <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 py-3 text-sm"
                >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp</span>
                </a>
                <a
                    href={CONTACT_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-white hover:bg-secondary/90 font-medium rounded-full px-4 py-3 transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-md hover:shadow-lg"
                >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar</span>
                </a>
            </div>
        </div>
    );
}
