'use client';

import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg p-4 md:hidden">
            <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.evaluationMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center space-x-3 py-4 text-base font-semibold"
            >
                <Phone className="w-5 h-5" />
                <span>Agendar Evaluación</span>
            </a>
        </div>
    );
}
