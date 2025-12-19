import { Calendar, Zap, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, PLACEHOLDERS } from '@/react-app/utils/constants';

export default function VideoHero() {
    return (
        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={PLACEHOLDERS.videoPoster}
                    className="object-cover w-full h-full"
                >
                    <source src={PLACEHOLDERS.heroVideo} type="video/mp4" />
                    {/* Fallback image if video fails to load or on power saving mode */}
                    <img
                        src={PLACEHOLDERS.videoPoster}
                        alt="Clínica Dental Dr. Carlos Beiner"
                        className="object-cover w-full h-full"
                    />
                </video>
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-neutral-900/70 via-neutral-900/50 to-neutral-900/30 flex items-center">
                    <div className="container mx-auto px-4 h-full flex items-center md:items-center">
                        <div className="max-w-3xl pt-20 md:pt-0">
                            <div className="inline-flex items-center space-x-1 md:space-x-2 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6">
                                <Zap className="w-3 h-3 md:w-4 md:h-4 text-secondary" fill="currentColor" />
                                <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-wide">
                                    Tecnología sin dolor
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                {/* Placeholder: {{HERO_TITULO}} */}
                                Resolvemos tu problema <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                                    con confianza y sin dolor
                                </span>
                            </h1>

                            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-xl leading-relaxed">
                                {/* Placeholder: {{HERO_SUBTITULO}} */}
                                Muelas del juicio, Urgencias e Implantes.
                                Atención rápida, trato cercano y resultados garantizados.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={CONTACT_INFO.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-center flex items-center justify-center space-x-2 px-8 py-4 text-lg shadow-lg shadow-primary/30"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Agendar Evaluación</span>
                                </a>
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-8 rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Consulta por WhatsApp</span>
                                </a>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 flex items-center space-x-6 text-white/80 text-sm font-medium">
                                <span>⭐ 4.9 en Google Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
