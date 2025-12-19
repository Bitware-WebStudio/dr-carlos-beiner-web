import type { Metadata } from 'next';
import Link from 'next/link';
import { Siren, Phone, AlertTriangle, Clock, ChevronRight, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Urgencias Dentales - Dr. Carlos Beiner',
    description: 'Atención inmediata para emergencias dentales en Providencia. No esperes, tu salud es lo primero.',
};

export default function UrgenciasDentalesPage() {
    const whatsappNumber = CONTACT_INFO.whatsappNumber;
    const whatsappMessage = encodeURIComponent('¡URGENCIA DENTAL! Necesito atención inmediata.');

    const emergencies = [
        'Dolor dental agudo e intenso',
        'Traumatismo o golpe en los dientes',
        'Diente roto o fracturado',
        'Sangrado que no se detiene',
        'Infección o absceso dental',
        'Diente permanente que se cayó',
        'Pérdida de restauración o corona',
        'Inflamación severa'
    ];

    const faqs = [
        {
            question: '¿Cómo saber si mi dolor es una urgencia real?',
            answer: 'Si el dolor te impide dormir, no cede con analgésicos o hay inflamación visible, es una urgencia inmediata.',
            link: '/tratamientos/urgencias-dentales/guias/es-urgencia-real'
        },
        {
            question: 'Cara hinchada: ¿puedo tomar antibióticos solo?',
            answer: 'Nunca. El antibiótico solo enmascara la infección. La causa debe ser tratada por un dentista para evitar riesgos mayores.',
            link: '/tratamientos/urgencias-dentales/guias/cara-hinchada-antibioticos'
        },
        {
            question: 'Dolor dental nocturno: ¿cuándo es grave?',
            answer: 'Si el dolor aumenta al acostarte o late con el pulso, suele indicar una inflamación del nervio que requiere urgencia.',
            link: '/tratamientos/urgencias-dentales/guias/dolor-nocturno'
        },
        {
            question: '¿En una urgencia siempre sacan el diente?',
            answer: 'No. Nuestra prioridad es salvar el diente. Muchas veces una endodoncia o drenaje resuelve el problema.',
            link: '/tratamientos/urgencias-dentales/guias/siempre-sacan-diente'
        },
        {
            question: 'Se me cayó un diente por un golpe, ¿se puede salvar?',
            answer: '¡Sí! Tienes aprox. 60 minutos. Guárdalo en leche y ven de inmediato. Podríamos re-implantarlo.',
            link: '/tratamientos/urgencias-dentales/guias/diente-caido-golpe'
        },
        {
            question: 'Infección dental: ¿cuánto tiempo puedo esperar?',
            answer: 'Absolutamente nada. Una infección dental puede propagarse al rostro o cuello, convirtiéndose en riesgo vital.',
            link: '/tratamientos/urgencias-dentales/guias/infeccion-cuanto-esperar'
        }
    ];

    const firstAid = [
        {
            title: 'Dolor Dental',
            advice: 'Enjuague con agua tibia con sal. Tome analgésicos según indicación. Contacte al dentista de inmediato.'
        },
        {
            title: 'Diente Roto',
            advice: 'Guarde los fragmentos. Enjuague la boca con agua tibia. Aplique compresas frías. Llame de inmediato.'
        },
        {
            title: 'Diente Caído',
            advice: 'Manipule solo por la corona. No limpie la raíz. Guárdelo en leche o saliva. Urgencia máxima.'
        },
        {
            title: 'Sangrado',
            advice: 'Aplique gasa limpia con presión. Si no para en 10 minutos, busque atención de emergencia.'
        }
    ];

    return (
        <main>
            <section className="pt-32 pb-20 bg-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <Siren className="w-10 h-10" />
                        </div>
                        <h1 className="font-display font-bold text-neutral-900 mb-6 text-4xl md:text-5xl">
                            Urgencias Dentales
                        </h1>
                        <p className="text-xl text-neutral-700 mb-8">
                            Atención inmediata para emergencias dentales. No esperes, tu salud es lo primero.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 text-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Contactar por WhatsApp AHORA</span>
                            </a>
                            <a
                                href={`tel:${whatsappNumber}`}
                                className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Llamar Ahora</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h2 className="font-display font-bold text-neutral-900 mb-4 text-3xl">
                                ¿Cuándo es una Urgencia?
                            </h2>
                            <p className="text-neutral-600">
                                Busca atención inmediata si experimentas alguno de estos síntomas:
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {emergencies.map((emergency, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-red-50 p-4 rounded-xl border border-red-100">
                                    <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></div>
                                    <span className="text-neutral-700 font-medium">{emergency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 gradient-soft">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="font-display font-bold text-neutral-900 mb-4 text-3xl">
                                Primeros Auxilios Dentales
                            </h2>
                            <p className="text-neutral-600">
                                Qué hacer mientras llegas al consultorio
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {firstAid.map((item, index) => (
                                <div key={index} className="card">
                                    <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600">
                                        {item.advice}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                            <h2 className="font-display font-bold text-neutral-900 mb-4 text-3xl">
                                Preguntas Frecuentes y Guías de Urgencia
                            </h2>
                            <p className="text-neutral-600">
                                Haz clic en cualquier pregunta para leer la guía de acción inmediata.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <Link key={index} href={faq.link} className="card group hover:border-red-600 transition-all duration-300 flex flex-col h-full bg-red-50/30">
                                    <h3 className="font-display font-semibold text-lg text-neutral-900 mb-3 flex items-start group-hover:text-red-700 transition-colors">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-neutral-600 ml-7 mb-4 flex-1">
                                        {faq.answer}
                                    </p>
                                    <div className="ml-7 pt-4 border-t border-red-100 mt-auto">
                                        <span className="text-red-600 font-bold text-sm flex items-center group-hover:underline">
                                            Leer guía de urgencia
                                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-red-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Siren className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="font-display font-bold mb-6 text-3xl md:text-4xl">
                            ¿Tienes una Urgencia Dental?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            No esperes. El tiempo es crucial en emergencias dentales.
                            Contáctanos inmediatamente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-red-600 hover:bg-neutral-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>WhatsApp Urgencia</span>
                            </a>
                            <a
                                href={`tel:${whatsappNumber}`}
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Llamar Ahora</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
