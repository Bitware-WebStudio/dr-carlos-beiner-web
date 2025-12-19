import { MapPin, Navigation, Train } from 'lucide-react';

export default function LocationMap() {
    const address = 'Nueva Providencia 1860, Providencia, Santiago';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <section id="ubicacion" className="py-20 bg-neutral-50 scroll-mt-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-neutral-900 mb-4">
                        Nuestra Ubicación
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        En el corazón de Providencia, fácil acceso en metro y locomoción
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="card space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                                    Dirección
                                </h3>
                                <p className="text-neutral-700">
                                    Nueva Providencia 1860<br />
                                    Providencia, Santiago
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                                <Train className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                                    Cómo Llegar
                                </h3>
                                <p className="text-neutral-700 mb-2">
                                    <strong>Metro:</strong> Estación Pedro de Valdivia (Línea 1)
                                </p>
                                <p className="text-neutral-600 text-sm">
                                    A solo pasos de la estación, salida Av. Providencia
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-support-50 flex items-center justify-center flex-shrink-0">
                                <Navigation className="w-6 h-6 text-support" />
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-2">
                                    Referencias
                                </h3>
                                <ul className="text-neutral-700 space-y-1 text-sm">
                                    <li>• Cerca de Av. Providencia</li>
                                    <li>• Frente al Metro Pedro de Valdivia</li>
                                    <li>• Estacionamientos cercanos</li>
                                </ul>
                            </div>
                        </div>

                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full flex items-center justify-center space-x-2"
                        >
                            <Navigation className="w-5 h-5" />
                            <span>Abrir en Google Maps</span>
                        </a>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-soft h-[500px]">
                        <iframe
                            src="https://maps.google.com/maps?q=Av.+Nueva+Providencia+1860,+Providencia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación del consultorio"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
