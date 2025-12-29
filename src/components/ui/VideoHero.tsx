'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, Zap, MessageCircle, Star } from 'lucide-react';
import { CONTACT_INFO, PLACEHOLDERS } from '@/lib/constants';

export default function VideoHero() {
    const [rating, setRating] = useState<number | null>(null);

    useEffect(() => {
        async function fetchRating() {
            try {
                const response = await fetch('/api/reviews');
                if (response.ok) {
                    const data = await response.json();
                    if (data.rating) {
                        setRating(data.rating);
                    }
                }
            } catch (error) {
                // Silently fail - use fallback rating
                console.error('Failed to fetch rating:', error);
            }
        }
        fetchRating();
    }, []);

    const displayRating = rating || parseFloat(PLACEHOLDERS.rating);

    return (
        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
            {/* Poster Image for LCP optimization */}
            <Image
                src={PLACEHOLDERS.videoPoster}
                alt="Clínica Dental Dr. Carlos Beiner"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
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
                </video>
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
                                Resolvemos tu problema <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                                    con confianza y sin dolor
                                </span>
                            </h1>

                            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-xl leading-relaxed">
                                Muelas del juicio, Urgencias e Implantes.
                                Atención rápida, trato cercano y resultados garantizados.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.evaluationMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-center flex items-center justify-center space-x-2 px-8 py-4 text-lg shadow-lg shadow-primary/30"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Agendar Evaluación</span>
                                </a>

                            </div>

                            <div className="mt-12 flex items-center space-x-2 text-white/90 text-sm font-semibold">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>
                                <span>{displayRating.toFixed(1)} en Google Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
