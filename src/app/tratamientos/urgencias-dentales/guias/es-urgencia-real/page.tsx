import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Cómo saber si mi dolor dental es una urgencia real? | Dr. Carlos Beiner',
    description: 'Red flags claras para identificar cuándo debes consultar inmediatamente y cuándo puedes esperar.',
};

export default function EsUrgenciaReal() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: '¿Es urgencia real?' }
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
                "name": "¿El dolor dental que despierta en la noche es urgencia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generalmente sí. El dolor que te despierta de noche, especialmente si es pulsátil y no cede con analgésicos, indica inflamación o infección avanzada del nervio dental (pulpitis). Deberías consultar dentro de las próximas 24 horas."
                }
            },
            {
                "@type": "Question",
                "name": "¿La hinchazón facial es peligrosa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La hinchazón facial por causa dental puede ser peligrosa si está creciendo rápidamente, viene con fiebre, dificulta tragar o respirar, o si se extiende hacia el cuello o los ojos. Estas son emergencias que requieren atención inmediata."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuándo no debo esperar para consultar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No esperes si tienes: hinchazón que crece rápido, fiebre alta, dificultad para tragar o respirar, sangrado abundante, traumatismo dental, dolor extremo que no mejora con medicamentos."
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
                title="¿Cómo saber si mi dolor dental es una urgencia real?"
                description="Red flags claras para identificar cuándo debes consultar inmediatamente y cuándo puedes esperar."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-red-900 mb-2">🚨 La regla de oro</p>
                    <p className="text-red-800">
                        <strong>Si tienes dudas, consulta.</strong> Es mejor ir y que te digan "no era tan grave"
                        que esperar y terminar con una complicación seria. Pero esta guía te ayudará a distinguir
                        lo urgente de lo que puede esperar.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    🚨 Señales que SÍ son urgencia (consulta hoy)
                </h2>
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <ul className="space-y-3 text-red-800">
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Hinchazón facial que crece rápidamente</strong> (en horas)</li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Fiebre alta</strong> (más de 38°C) junto con dolor dental</li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Dificultad para tragar</strong> o sensación de cierre de garganta</li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Dificultad para respirar</strong></li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Sangrado abundante</strong> que no para después de 30 min de presión</li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Traumatismo dental:</strong> diente que se cayó, se movió o fracturó por golpe</li>
                        <li className="flex items-start"><span className="mr-2">🔴</span><strong>Dolor extremo</strong> que no mejora con analgésicos fuertes</li>
                    </ul>
                    <p className="text-red-900 font-bold mt-4">→ Estas situaciones requieren atención el mismo día.</p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ⚠️ Señales de urgencia moderada (consulta en 24-48h)
                </h2>
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 my-6">
                    <ul className="space-y-2 text-amber-800">
                        <li><strong>• Dolor que te despierta de noche</strong> (aunque ceda con analgésicos)</li>
                        <li><strong>• Hinchazón pequeña pero persistente</strong></li>
                        <li><strong>• Sensibilidad extrema</strong> al frío o calor que demora en pasar</li>
                        <li><strong>• Encía muy roja, inflamada y que sangra fácil</strong></li>
                        <li><strong>• Diente suelto</strong> (sin trauma)</li>
                        <li><strong>• Mal sabor/olor persistente</strong> en una zona</li>
                    </ul>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ✅ Situaciones que pueden esperar (agenda normal)
                </h2>
                <div className="bg-green-50 border border-green-300 rounded-xl p-6 my-6">
                    <ul className="space-y-2 text-green-800">
                        <li>• Molestia leve que aparece solo al morder</li>
                        <li>• Sensibilidad breve al frío que pasa rápido</li>
                        <li>• Diente astillado sin dolor</li>
                        <li>• Corona o relleno que se salió pero no duele</li>
                        <li>• Encía inflamada en una zona pequeña, sin fiebre</li>
                    </ul>
                    <p className="text-green-700 mt-3">→ Puedes esperar una cita normal, pero no lo pospongas demasiado.</p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿El dolor que despierta en la noche es urgencia?
                </h2>
                <p><strong>Generalmente sí.</strong> El dolor nocturno que te despierta tiene características especiales:</p>
                <ul>
                    <li>🔹 Suele ser <strong>pulsátil</strong> (late como el corazón)</li>
                    <li>🔹 Empeora al acostarte (por aumento de presión en la cabeza)</li>
                    <li>🔹 Puede no responder bien a analgésicos comunes</li>
                    <li>🔹 Es signo de <strong>pulpitis</strong> (inflamación del nervio)</li>
                </ul>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                    💡 <strong>¿Por qué duele más de noche?</strong> Al acostarte, la sangre fluye más hacia la cabeza,
                    lo que aumenta la presión en un nervio ya inflamado. Por eso el dolor se intensifica.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿La hinchazón facial es peligrosa?
                </h2>
                <p><strong>Depende.</strong> No toda hinchazón es emergencia, pero hay que saber distinguir:</p>
                <div className="space-y-4 my-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <h3 className="font-bold text-amber-900">Hinchazón moderada:</h3>
                        <p className="text-amber-800">Pequeña, localizada cerca del diente, sin fiebre. Consulta en 24-48h.</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <h3 className="font-bold text-red-900">Hinchazón peligrosa:</h3>
                        <p className="text-red-800">Grande, que crece rápido, con fiebre, que se extiende hacia el ojo o cuello, dificulta tragar. <strong>Urgencia inmediata.</strong></p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿El sangrado abundante es normal?
                </h2>
                <p>Depende del contexto:</p>
                <ul>
                    <li><strong>Después de extracción:</strong> Algo de sangrado o babeo rosado es normal las primeras 24h.</li>
                    <li><strong>Sangrado espontáneo:</strong> Si sangra sin razón, mucho y no para con presión, es urgencia.</li>
                    <li><strong>Sangrado de encías al cepillar:</strong> No es urgencia, pero indica enfermedad periodontal que debe tratarse.</li>
                </ul>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Los dolores punzantes son más graves que los sordos?
                </h2>
                <p>Ambos pueden ser graves, pero tienen significados diferentes:</p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-4">
                        <h3 className="font-bold text-neutral-900">Dolor punzante/pulsátil:</h3>
                        <p className="text-neutral-700">Indica inflamación aguda, posible pulpitis o absceso. Generalmente más urgente.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-4">
                        <h3 className="font-bold text-neutral-900">Dolor sordo/constante:</h3>
                        <p className="text-neutral-700">Puede indicar problema crónico, recesión, o problema de ATM. Menos inmediato pero igual debe evaluarse.</p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    Qué hacer mientras consigues cita
                </h2>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-neutral-900 mb-3">✅ Puedes hacer:</h3>
                    <ul className="space-y-1 text-neutral-700">
                        <li>• Tomar analgésicos de venta libre (ibuprofeno, paracetamol)</li>
                        <li>• Aplicar frío externo si hay hinchazón</li>
                        <li>• Enjuagar suavemente con agua tibia y sal</li>
                        <li>• Evitar masticar de ese lado</li>
                    </ul>
                    <h3 className="font-bold text-red-900 mt-4 mb-3">❌ NO debes:</h3>
                    <ul className="space-y-1 text-red-800">
                        <li>• Automedicarte con antibióticos</li>
                        <li>• Poner aspirina directo sobre la encía (quema el tejido)</li>
                        <li>• Aplicar calor si hay hinchazón (empeora)</li>
                        <li>• Ignorar síntomas graves esperando que pasen solos</li>
                    </ul>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    No todo dolor dental es urgencia, pero las <strong>señales de alarma</strong> deben tomarse en serio:
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                    🚨 <strong>Consulta de inmediato si:</strong> Hinchazón creciente + fiebre + dificultad para tragar/respirar +
                    trauma dental + sangrado que no para.
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>Recuerda:</strong> Es mejor consultar y que te digan "no era tan grave" que esperar
                    y terminar en una emergencia médica real.
                </div>
            </ArticleLayout>
        </>
    );
}
