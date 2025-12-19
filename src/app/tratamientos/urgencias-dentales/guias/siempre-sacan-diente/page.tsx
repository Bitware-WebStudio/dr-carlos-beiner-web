import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿En una urgencia dental siempre sacan el diente? | Dr. Carlos Beiner',
    description: 'La verdad sobre cuándo se puede salvar un diente en urgencia y cuándo no queda otra opción.',
};

export default function SiempreSacanElDiente() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: '¿Siempre sacan el diente?' }
    ];

    const backLink = {
        label: '← Volver a Urgencias Dentales',
        href: '/tratamientos/urgencias-dentales'
    };

    const relatedArticles = [
        { title: 'Cara hinchada: ¿antibióticos solos?', href: '/tratamientos/urgencias-dentales/guias/cara-hinchada-antibioticos' },
        { title: 'Dolor nocturno: ¿cuándo es grave?', href: '/tratamientos/urgencias-dentales/guias/dolor-nocturno' }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Si voy a urgencia dental, me van a sacar la muela?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No necesariamente. La prioridad es aliviar el dolor. En muchos casos, se puede salvar el diente con una endodoncia de urgencia. La extracción es el último recurso cuando el diente no se puede salvar."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué es una endodoncia de urgencia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Es un procedimiento rápido para aliviar el dolor agudo. Se hace una abertura en el diente para liberar la presión y limpiar la infección. Esto calma el dolor inmediatamente y permite salvar el diente para tratarlo definitivamente después."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuándo es obligatorio sacar el diente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Se extrae si hay una fractura vertical de la raíz, si la destrucción del diente es tan grande que no se puede restaurar, o si hay enfermedad periodontal severa (pérdida de hueso) que hace que el diente esté suelto."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
            />
            <ArticleLayout
                title="¿En una urgencia dental siempre sacan el diente?"
                description="La verdad sobre cuándo se puede salvar un diente en urgencia y cuándo no queda otra opción."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-green-900 mb-2">✅ La respuesta corta</p>
                    <p className="text-green-800">
                        <strong>No.</strong> En urgencias dentales, el objetivo principal es <strong>aliviar el dolor y
                            controlar la infección</strong>. En muchos casos, el diente se puede salvar con endodoncia.
                        La extracción es el último recurso cuando no hay otra opción viable.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué es una endodoncia de urgencia?
                </h2>
                <p>
                    Una <strong>endodoncia</strong> (tratamiento de conducto) es un procedimiento para salvar un diente
                    cuyo nervio está dañado o infectado.
                </p>
                <p>En urgencia, se puede hacer una <strong>endodoncia de urgencia parcial</strong>:</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                    <ol className="space-y-2 text-blue-800">
                        <li><strong>1. Apertura del diente:</strong> Se hace un pequeño agujero para llegar al nervio</li>
                        <li><strong>2. Drenaje:</strong> Si hay pus, se deja salir liberando la presión</li>
                        <li><strong>3. Alivio inmediato:</strong> Al liberar la presión, el dolor cede dramáticamente</li>
                        <li><strong>4. Cita posterior:</strong> Se completa la endodoncia en otra sesión</li>
                    </ol>
                </div>
                <p>
                    Esta endodoncia parcial alivia el dolor igual de rápido que una extracción, pero <strong>conserva el diente</strong>.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo se intenta salvar el diente?
                </h2>
                <p>Se intentará salvar el diente siempre que sea posible y sensato:</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-green-900 mb-3">✅ Se puede salvar si:</h3>
                    <ul className="space-y-2 text-green-800">
                        <li>• Hay suficiente estructura dental remanente</li>
                        <li>• La raíz está en buenas condiciones</li>
                        <li>• El hueso alrededor no está muy dañado</li>
                        <li>• El diente es importante para la función (masticación, estética)</li>
                        <li>• El paciente desea conservarlo y puede completar el tratamiento</li>
                    </ul>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo no queda otra opción que extraer?
                </h2>
                <p>Hay situaciones donde la extracción es la mejor (o única) opción:</p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-red-900 mb-3">❌ Se debe extraer si:</h3>
                    <ul className="space-y-2 text-red-800">
                        <li>• <strong>Fractura vertical:</strong> La raíz está partida de arriba a abajo (irrecuperable)</li>
                        <li>• <strong>Destrucción masiva:</strong> No queda suficiente diente para restaurar</li>
                        <li>• <strong>Enfermedad periodontal severa:</strong> El diente está muy suelto por pérdida de hueso</li>
                        <li>• <strong>Endodoncias fallidas previas:</strong> Ya se intentó salvar y no funcionó</li>
                        <li>• <strong>Infección descontrolada:</strong> No responde al tratamiento y pone en riesgo la salud</li>
                    </ul>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué se hace primero: aliviar el dolor o tratar?
                </h2>
                <p><strong>Aliviar el dolor ES parte del tratamiento.</strong></p>
                <p>En una urgencia, la secuencia típica es:</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ol className="space-y-3">
                        <li><strong>1. Evaluación rápida:</strong> Determinar cuál es el problema y su gravedad</li>
                        <li><strong>2. Anestesia:</strong> Adormecer la zona para poder trabajar sin dolor</li>
                        <li><strong>3. Tratamiento de emergencia:</strong>
                            <ul className="ml-4 mt-2 text-sm">
                                <li>• Si es infección: Drenaje y/o apertura del diente</li>
                                <li>• Si es trauma: Estabilización, reimplante, ferulización</li>
                                <li>• Si es fractura: Evaluación y restauración temporal</li>
                            </ul>
                        </li>
                        <li><strong>4. Indicaciones:</strong> Medicamentos y cuidados en casa</li>
                        <li><strong>5. Cita de seguimiento:</strong> Para completar el tratamiento definitivo</li>
                    </ol>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Puedo pedir una segunda opinión en urgencia?
                </h2>
                <p><strong>Sí, siempre.</strong></p>
                <p>
                    Tienes derecho a entender tu situación y las opciones disponibles. Si te dicen que hay que extraer
                    y tienes dudas, puedes:
                </p>
                <ul>
                    <li>• Pedir que te expliquen por qué no se puede salvar</li>
                    <li>• Solicitar tratamiento de emergencia (aliviar dolor) y buscar segunda opinión</li>
                    <li>• Preguntar si hay alternativas, aunque sean más complejas o costosas</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Consejo:</strong> Un buen dentista te explicará claramente por qué recomienda una
                    opción u otra. Si sientes que te presionan sin explicar, es válido buscar otra opinión.
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    La urgencia dental NO significa automáticamente perder el diente. El objetivo es siempre
                    <strong>conservar cuando sea posible</strong>.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>Lo importante:</strong> Entre más temprano consultes, más opciones hay.
                    Un diente que se podía salvar ayer puede no ser salvable mañana si la infección avanza.
                </div>
            </ArticleLayout>
        </>
    );
}
