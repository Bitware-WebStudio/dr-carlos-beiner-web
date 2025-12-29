'use client';

import { useEffect, useState } from 'react';
import { Star, Loader2, ExternalLink } from 'lucide-react';

interface Review {
    author_name: string;
    rating: number;
    text: string;
    relative_time_description: string;
    profile_photo_url: string;
    author_url: string;
}

interface GoogleData {
    name: string;
    rating: number;
    total: number;
    url: string;
    reviews: Review[];
}

export default function GoogleReviews() {
    const [data, setData] = useState<GoogleData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('/api/reviews');
                if (!response.ok) throw new Error('Error al cargar las reseñas');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        }
        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="py-32 flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-b from-white via-neutral-50 to-white">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-neutral-600 font-semibold text-lg">Cargando reseñas verificadas...</p>
            </div>
        );
    }

    if (error || !data) {
        return null;
    }

    return (
        <section className="py-32 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden" id="reseñas">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg border border-blue-100 mb-8 hover:shadow-xl transition-shadow">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            className="h-6"
                        />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">Reseñas Verificadas</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
                        Lo que dicen nuestros <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">pacientes</span>
                    </h2>

                    {/* Rating Display */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                        <div className="flex items-end gap-2">
                            <span className="text-7xl md:text-8xl font-black text-neutral-900 leading-none">{data.rating}</span>
                            <span className="text-2xl text-neutral-400 font-medium mb-2">/5</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-7 h-7 ${i < Math.floor(data.rating)
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-neutral-300 fill-neutral-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-neutral-600 font-semibold text-lg">
                                Basado en <span className="text-primary font-bold">{data.total}+</span> reseñas verificadas
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {data.reviews.map((review, index) => (
                        <a
                            key={index}
                            href={review.author_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary/30 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h4 className="font-bold text-xl text-neutral-900 group-hover:text-primary transition-colors mb-2">
                                        {review.author_name}
                                    </h4>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200 fill-neutral-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium">{review.relative_time_description}</p>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-neutral-700 text-base leading-relaxed flex-grow mb-6">
                                "{review.text}"
                            </p>

                            {/* Footer with Google Badge */}
                            <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                        alt="Google"
                                        className="h-4 opacity-60"
                                    />
                                    <span className="text-xs text-neutral-400 font-medium">Reseña verificada</span>
                                </div>
                                <span className="text-sm text-primary font-semibold group-hover:underline flex items-center gap-1">
                                    Ver más
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJyxLGySvPYpYRfcEMXEZESqg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                    >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
                        Dejar una reseña en Google
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
