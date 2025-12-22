'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Se muestra solo si el usuario ha bajado más de 400px
            // (cuando el botón del Hero ya no es visible)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg p-4 md:hidden transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                }`}
        >
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
