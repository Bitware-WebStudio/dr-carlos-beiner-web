import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function AppointmentCTA() {
    const whatsappNumber = '56933850580';
    const whatsappMessage = encodeURIComponent('Hola Dr. Carlos, quiero agendar una evaluación...');

    return (
        <section id="contacto" className="py-20 relative overflow-hidden scroll-mt-32">
            <div className="absolute inset-0 gradient-primary opacity-95"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <Calendar className="w-16 h-16 mx-auto mb-6" />
                    <h2 className="font-display font-bold mb-6">
                        ¿Listo para Agendar tu Cita?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Agenda tu evaluación dental hoy mismo. Es rápido, fácil y sin compromiso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary hover:bg-neutral-100 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center space-x-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Agendar por WhatsApp</span>
                        </a>
                        <a
                            href={`tel:${whatsappNumber}`}
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Llamar Ahora</span>
                        </a>
                    </div>

                    <p className="mt-8 text-sm opacity-75">
                        Atención personalizada • Tecnología de punta • +15 años de experiencia
                    </p>
                </div>
            </div>
        </section>
    );
}
