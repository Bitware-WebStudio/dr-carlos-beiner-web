import { Calendar, Stethoscope, FileText, CreditCard } from 'lucide-react';
import FinancingBar from '@/components/ui/FinancingBar';

export default function FirstVisit() {
    const steps = [
        {
            icon: <Calendar className="w-8 h-8 text-secondary" />,
            title: "1. Agenda sin estrés",
            description: "Escríbenos por WhatsApp. Te responderemos rápido y encontraremos una hora que te acomode."
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-secondary" />,
            title: "2. Evaluación (Escucha)",
            description: "No empezamos nada sin hablar contigo primero. Queremos entender qué necesitas y qué te preocupa."
        },
        {
            icon: <FileText className="w-8 h-8 text-secondary" />,
            title: "3. Claridad total",
            description: "Te explicaremos el tratamiento en palabras simples. Sabrás exactamente qué haremos y cuánto costará."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-secondary" />,
            title: "4. Tratamiento Seguro",
            description: "Usamos tecnología para que tu procedimiento sea lo más rápido y cómodo posible."
        }
    ];

    return (
        <section className="py-20 bg-neutral-50" id="primera-visita">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                        ¿Primera vez aquí? Olvida el miedo.
                    </h2>
                    <p className="text-xl text-neutral-600">
                        Sabemos que ir al dentista no es tu panorama favorito. Por eso, hemos diseñado una experiencia pensada en tu tranquilidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center relative group">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-4">{step.title}</h3>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                {step.description}
                            </p>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-neutral-200 -z-10 -ml-8 transform -translate-x-1/2" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <FinancingBar />
                </div>
            </div>
        </section>
    );
}
