import { Star } from 'lucide-react';

export default function VideoReviews() {
    const reviews = [
        {
            id: 1,
            name: "María Paz González",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 2 semanas",
            comment: "Excelente atención del Dr. Carlos Beiner. Me realizó un implante dental y el resultado fue perfecto. Muy profesional y el proceso fue completamente indoloro. Super recomendado!"
        },
        {
            id: 2,
            name: "Felipe Ramírez",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 1 mes",
            comment: "El mejor dentista de Santiago. Me hizo un diseño de sonrisa y quedé encantado con los resultados. Instalaciones modernas y un trato muy humano. 100% recomendable."
        },
        {
            id: 3,
            name: "Carolina Silva",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 3 semanas",
            comment: "Tuve una urgencia dental y me atendió de inmediato. ¡Salvó mi día! Muy agradecida por la rapidez y profesionalismo. Sin duda volveré para mis chequeos."
        },
        {
            id: 4,
            name: "Roberto Muñoz",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 1 semana",
            comment: "Me sacó las muelas del juicio sin dolor y con una recuperación super rápida. El doctor explica todo detalladamente y te hace sentir muy tranquilo durante el procedimiento."
        },
        {
            id: 5,
            name: "Daniela Torres",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 4 días",
            comment: "Increíble profesional! Usan tecnología de punta (Scanner 3D) y todo es muy preciso. Me realizó un blanqueamiento y quedé feliz con mi sonrisa. Muy recomendado!"
        },
        {
            id: 6,
            name: "Andrés Soto",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
            rating: 5,
            date: "hace 2 meses",
            comment: "Excelente servicio y atención personalizada. Ubicación perfecta frente al metro Pedro de Valdivia. El Dr. Beiner es muy profesional y dedicado con cada paciente."
        }
    ];

    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            className="h-6"
                        />
                        <span className="text-2xl font-semibold text-neutral-800">Reseñas</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-4xl font-bold text-neutral-900">4.9</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-neutral-600">Basado en más de 100 reseñas verificadas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100"
                        >
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-neutral-900 text-sm truncate">{review.name}</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-1">{review.date}</p>
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="text-neutral-700 text-sm leading-relaxed">{review.comment}</p>

                            {/* Google Badge */}
                            <div className="mt-4 pt-4 border-t border-neutral-100">
                                <span className="text-xs text-neutral-400 flex items-center gap-1">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Publicado en Google
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-primary/20 hover:border-primary/40"
                    >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        Ver todas las reseñas en Google
                    </a>
                </div>
            </div>
        </section>
    );
}
