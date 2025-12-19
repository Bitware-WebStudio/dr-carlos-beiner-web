import type { Metadata } from 'next';
import Link from 'next/link';
import AppointmentCTA from '@/components/ui/AppointmentCTA';
import FinancingBar from '@/components/ui/FinancingBar';

import { Drill, ShieldCheck, Clock, Sparkles, HelpCircle, AlertCircle, ChevronRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Implantes Dentales - Dr. Carlos Beiner',
    description: 'Recupera la confianza de comer y sonreír con implantes dentales de titanio premium y tecnología de guía digital.',
};

export default function ImplantesPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="pt-32 pb-20 gradient-soft">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Drill className="w-4 h-4" />
                                <span>Implantología Avanzada</span>
                            </div>
                            <h1 className="font-display font-bold text-neutral-900 mb-6 text-4xl md:text-5xl leading-tight">
                                Recupera la confianza de <br />
                                <span className="text-primary">comer y sonreír</span>
                            </h1>
                            <p className="text-xl text-neutral-700 mb-6">
                                Implantes dentales de titanio premium con tecnología de guía digital.
                                Sin dolor, precisos y con facilidades de pago.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center space-x-2 text-sm font-medium text-neutral-600">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span>Garantía escrita</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm font-medium text-neutral-600">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    <span>Tecnología digital 3D</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="https://res.cloudinary.com/dvofqghc7/video/upload/q_auto,f_auto/v1766027301/implantologia_vkmapx.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinancingBar />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display font-bold text-neutral-900 mb-12 text-center text-3xl">
                            ¿Por qué elegir nuestros implantes?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-neutral-900">Tiempos Reducidos</h3>
                                <p className="text-neutral-600">Gracias a la planificación digital 3D, reducimos el tiempo de cirugía y recuperación.</p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-neutral-900">Materiales Premium</h3>
                                <p className="text-neutral-600">Solo utilizamos titanio de grado médico biocompatible de marcas líderes mundiales.</p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-neutral-900">Alta Tasa de Éxito</h3>
                                <p className="text-neutral-600">Más de 15 años de experiencia y cientos de casos exitosos nos respaldan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="font-display font-bold text-neutral-900 mb-4 text-3xl">
                                Preguntas y Guías sobre Implantes
                            </h2>
                            <p className="text-neutral-600">
                                Resuelve tus dudas profundas con nuestros artículos informativos.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "¿Duele ponerse un implante dental? La verdad", a: "No. Se utiliza anestesia local potente para que no sientas nada. Te contamos cómo es el post-operatorio real.", link: "/tratamientos/implantes/guias/duele-ponerse" },
                                { q: "¿Quedaré sin dientes durante el tratamiento?", a: "Nunca. Utilizamos prótesis provisionales fijas o removibles para que mantengas tu estética siempre.", link: "/tratamientos/implantes/guias/quedare-sin-dientes" },
                                { q: "¿Puede el cuerpo rechazar un implante?", a: "La tasa de éxito es del 98%. Te explicamos qué factores influyen en la oseointegración.", link: "/tratamientos/implantes/guias/puede-rechazar" },
                                { q: "¿Cuánto duran realmente los implantes?", a: "Con buen cuidado pueden durar 20-25 años o toda la vida. Conoce los factores clave de mantenimiento.", link: "/tratamientos/implantes/guias/cuanto-duran" },
                                { q: "Implante vs Puente vs Prótesis", a: "Comparamos las 3 opciones para que entiendas por qué el implante es la inversión más inteligente.", link: "/tratamientos/implantes/guias/diferencia-implante-puente-protesis" },
                                { q: "Análisis de costos detallado", a: "Desglosamos qué influye en el precio de un implante vs otras alternativas a largo plazo.", link: "/tratamientos/implantes/guias/costo-implantes" }
                            ].map((faq, i) => (
                                <Link key={i} href={faq.link} className="card group hover:border-primary transition-all duration-300 flex flex-col h-full bg-neutral-50/30">
                                    <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3 flex items-start group-hover:text-primary transition-colors">
                                        <AlertCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                        {faq.q}
                                    </h3>
                                    <p className="text-neutral-600 ml-7 mb-4 flex-1">
                                        {faq.a}
                                    </p>
                                    <div className="ml-7 pt-4 border-t border-neutral-100 mt-auto">
                                        <span className="text-primary font-bold text-sm flex items-center group-hover:underline">
                                            Leer artículo completo
                                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <AppointmentCTA />
        </main>
    );
}
