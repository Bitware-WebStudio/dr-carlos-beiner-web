import type { Metadata } from "next";
import { Calendar, MessageCircle, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Agenda tu cita dental en Providencia. Atención personalizada con +15 años de experiencia.",
};

export default function ContactoPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
                        Contáctanos
                    </h1>
                    <p className="text-xl text-neutral-600">
                        Estamos aquí para resolver tus dudas y agendar tu evaluación
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Información de Contacto */}
                    <div className="space-y-6">
                        <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">
                            Información de Contacto
                        </h2>

                        <div className="card flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-neutral-900 mb-2">WhatsApp</h3>
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    +56 9 3385 0580
                                </a>
                                <p className="text-sm text-neutral-600 mt-1">Respuesta rápida por WhatsApp</p>
                            </div>
                        </div>

                        <div className="card flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-neutral-900 mb-2">Teléfono</h3>
                                <a
                                    href={`tel:${CONTACT_INFO.whatsappNumber}`}
                                    className="text-primary hover:underline"
                                >
                                    +56 9 3385 0580
                                </a>
                                <p className="text-sm text-neutral-600 mt-1">Llámanos directamente</p>
                            </div>
                        </div>

                        <div className="card flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-support-50 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-support" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-neutral-900 mb-2">Email</h3>
                                <a
                                    href="mailto:carlosbeiner@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    carlosbeiner@gmail.com
                                </a>
                                <p className="text-sm text-neutral-600 mt-1">Escríbenos tus consultas</p>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-lg text-neutral-900 mb-4">Horarios de Atención</h3>
                            <div className="space-y-2 text-neutral-700">
                                <p><strong>Lunes a Viernes:</strong> 9:00 - 20:00</p>
                                <p><strong>Sábados:</strong> 9:00 - 13:00</p>
                                <p className="text-sm text-neutral-600 mt-4">
                                    * Para urgencias fuera de horario, contáctanos por WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA de Agendamiento */}
                    <div className="bg-gradient-to-br from-primary via-support to-secondary rounded-2xl p-8 text-white">
                        <Calendar className="w-16 h-16 mb-6" />
                        <h2 className="font-display font-bold text-3xl mb-4">
                            Agenda tu Cita
                        </h2>
                        <p className="text-lg opacity-90 mb-8">
                            Te responderemos en minutos y encontraremos el mejor horario para ti
                        </p>

                        <div className="space-y-4">
                            <a
                                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.evaluationMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-white text-primary hover:bg-neutral-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center"
                            >
                                Agendar por WhatsApp
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                            <h3 className="font-semibold mb-3">¿Por qué elegirnos?</h3>
                            <ul className="space-y-2 text-sm opacity-90">
                                <li>✓ Atención el mismo día para urgencias</li>
                                <li>✓ Tecnología 3D y equipamiento moderno</li>
                                <li>✓ +15 años de experiencia</li>
                                <li>✓ Ubicación céntrica (Metro P. Valdivia)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
