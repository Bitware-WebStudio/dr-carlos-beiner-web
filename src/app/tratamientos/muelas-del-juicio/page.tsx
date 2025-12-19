import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentCTA from '@/components/ui/AppointmentCTA';
import { Scissors, AlertCircle, HelpCircle, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Extracción de Muelas del Juicio - Dr. Carlos Beiner',
    description: 'Procedimiento seguro y sin dolor para la extracción de terceros molares con técnicas mínimamente invasivas.',
};

export default function MuelasDelJuicioPage() {
    const faqs = [
        {
            question: '¿Si no me duelen, igual es necesario sacarlas?',
            answer: 'Aunque no duelan, pueden causar daños invisibles en dientes vecinos o quistes. Lo ideal es evaluar con Rayos X.',
            link: '/tratamientos/muelas-del-juicio/guias/si-no-duelen'
        },
        {
            question: '¿Cuánto dura la hinchazón después de la extracción?',
            answer: 'El pico máximo es a las 48-72 horas. Luego disminuye gradualmente hasta desaparecer en una semana.',
            link: '/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon'
        },
        {
            question: '¿Se pueden sacar las 4 muelas en una misma sesión?',
            answer: 'Sí, es muy común y recomendable para pasar por un solo post-operatorio. Evaluamos cada caso individualmente.',
            link: '/tratamientos/muelas-del-juicio/guias/4-muelas-misma-sesion'
        },
        {
            question: '¿Cuándo puedo volver a fumar o vapear?',
            answer: 'Se recomienda esperar al menos 72 horas para evitar la alveolitis seca, una complicación muy dolorosa.',
            link: '/tratamientos/muelas-del-juicio/guias/fumar-vapear'
        },
        {
            question: '¿Existe riesgo de perder la sensibilidad en el labio?',
            answer: 'Es un riesgo bajo que minimizamos mediante planificación digital y Rayos X para ver la posición del nervio.',
            link: '/tratamientos/muelas-del-juicio/guias/riesgo-sensibilidad'
        },
        {
            question: '¿Cómo puedo tener una recuperación más rápida?',
            answer: 'El reposo, el hielo y seguir la medicación son clave. Tenemos una guía con los 10 mejores consejos.',
            link: '/tratamientos/muelas-del-juicio/guias/recuperacion-rapida'
        }
    ];

    return (
        <main>
            <section className="pt-32 pb-20 gradient-soft">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Scissors className="w-4 h-4" />
                                <span>Cirugía Especializada</span>
                            </div>
                            <h1 className="font-display font-bold text-neutral-900 mb-6 text-4xl md:text-5xl leading-tight">
                                Extracción de Muelas del Juicio
                            </h1>
                            <p className="text-xl text-neutral-700 mb-6">
                                Procedimiento seguro y sin dolor para la extracción de terceros molares
                            </p>
                            <p className="text-neutral-600">
                                Con más de 15 años de experiencia en cirugía bucal, realizamos extracciones
                                de muelas del juicio utilizando técnicas mínimamente invasivas que garantizan
                                tu comodidad y una recuperación rápida.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop"
                                alt="Extracción de muelas del juicio"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display font-bold text-neutral-900 mb-12 text-center text-3xl">
                            Proceso de Extracción
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                                    Evaluación
                                </h3>
                                <p className="text-neutral-600">
                                    Examen clínico completo y rayos X para planificar el procedimiento
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                                    Cirugía
                                </h3>
                                <p className="text-neutral-600">
                                    Extracción con anestesia local y técnicas mínimamente invasivas
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="font-display font-semibold text-lg text-neutral-900 mb-2">
                                    Seguimiento
                                </h3>
                                <p className="text-neutral-600">
                                    Control post-operatorio para asegurar una recuperación óptima
                                </p>
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
                                Preguntas Frecuentes y Guías
                            </h2>
                            <p className="text-neutral-600">
                                Haz clic en cualquier pregunta para leer la guía detallada completa.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <Link key={index} href={faq.link} className="card group hover:border-primary transition-all duration-300 flex flex-col h-full">
                                    <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3 flex items-start group-hover:text-primary transition-colors">
                                        <AlertCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-neutral-600 ml-7 mb-4 flex-1">
                                        {faq.answer}
                                    </p>
                                    <div className="ml-7 pt-4 border-t border-neutral-100 mt-auto">
                                        <span className="text-primary font-bold text-sm flex items-center group-hover:underline">
                                            Leer guía completa
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
