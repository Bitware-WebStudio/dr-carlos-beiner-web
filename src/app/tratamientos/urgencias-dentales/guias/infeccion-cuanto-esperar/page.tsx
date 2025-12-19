import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Infección dental: ¿cuánto tiempo puedo esperar? | Dr. Carlos Beiner',
    description: 'Cómo progresa una infección dental, cuándo se vuelve peligrosa y por qué no debes esperar demasiado.',
};

export default function InfeccionCuantoEsperar() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: 'Infección: ¿cuánto esperar?' }
    ];

    const backLink = {
        label: '← Volver a Urgencias Dentales',
        href: '/tratamientos/urgencias-dentales'
    };

    const relatedArticles = [
        { title: 'Cara hinchada: ¿antibióticos solos?', href: '/tratamientos/urgencias-dentales/guias/cara-hinchada-antibioticos' },
        { title: '¿Es urgencia real?', href: '/tratamientos/urgencias-dentales/guias/es-urgencia-real' }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cuánto tiempo puedo estar con una infección en la muela?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No deberías esperar más de 24-48 horas. Las infecciones dentales pueden progresar rápidamente y volverse peligrosas. Si hay hinchazón facial, es una emergencia."
                }
            },
            {
                "@type": "Question",
                "name": "¿Una infección de muela se cura sola?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. El dolor puede disminuir si el nervio muere o si el pus encuentra salida (fístula), pero la infección bacteriana sigue ahí y continuará destruyendo hueso hasta que sea tratada."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si no me trato una infección dental?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La infección puede extenderse a los espacios profundos del cuello, causar absceso cerebral, mediastinitis o sepsis (infección en la sangre). En casos severos puede poner en riesgo la vida."
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
                title="Tengo una infección dental: ¿cuánto tiempo puedo esperar?"
                description="Cómo progresa una infección dental, cuándo se vuelve peligrosa y por qué no debes esperar demasiado."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-amber-900 mb-2">⚠️ La respuesta honesta</p>
                    <p className="text-amber-800">
                        <strong>Lo menos posible.</strong> Una infección dental no desaparece sola. Puede estabilizarse
                        temporalmente, pero siempre va a volver... y posiblemente peor. Lo ideal es tratarla dentro
                        de las <strong>48-72 horas</strong> de los primeros síntomas.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué es un absceso y cómo empeora con el tiempo?
                </h2>
                <p>
                    Un <strong>absceso dental</strong> es una bolsa de pus causada por una infección bacteriana.
                    Puede formarse en la punta de la raíz (absceso periapical) o en la encía (absceso periodontal).
                </p>
                <p><strong>Cómo progresa típicamente:</strong></p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ul className="space-y-4">
                        <li><strong>Etapa 1 - Inicio:</strong> Dolor localizado, sensibilidad al morder. Aún manejable.</li>
                        <li><strong>Etapa 2 - Inflamación:</strong> El pus se acumula, aparece hinchazón en la encía o cara. Dolor intenso.</li>
                        <li><strong>Etapa 3 - Fístula o extensión:</strong> La infección busca salida (fístula en encía) o se extiende a tejidos cercanos.</li>
                        <li><strong>Etapa 4 - Celulitis:</strong> Infección se propaga a espacios profundos del cuello. Muy peligroso.</li>
                        <li><strong>Etapa 5 - Sepsis:</strong> Infección generalizada. Emergencia médica.</li>
                    </ul>
                </div>
                <p className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                    🚨 <strong>Importante:</strong> La progresión puede ser rápida (horas) o lenta (semanas),
                    dependiendo de las bacterias y tu sistema inmune. No hay forma de predecirlo.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Puede una infección dental llegar al cerebro?
                </h2>
                <p><strong>Sí, aunque es raro.</strong></p>
                <p>Las infecciones dentales pueden propagarse a través de:</p>
                <ul>
                    <li>🔹 <strong>Espacios anatómicos:</strong> Del maxilar hacia la órbita del ojo o la base del cráneo</li>
                    <li>🔹 <strong>Venas:</strong> Las venas faciales no tienen válvulas, permitiendo propagación hacia el cerebro</li>
                    <li>🔹 <strong>Torrente sanguíneo:</strong> Septicemia que afecta todo el cuerpo, incluyendo el cerebro</li>
                </ul>
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <p className="font-bold text-red-900 mb-2">Condiciones graves (raras pero reales):</p>
                    <ul className="space-y-1 text-red-800">
                        <li>• <strong>Angina de Ludwig:</strong> Infección del piso de la boca que puede cerrar la vía aérea</li>
                        <li>• <strong>Trombosis del seno cavernoso:</strong> Coágulo infectado cerca del cerebro</li>
                        <li>• <strong>Mediastinitis:</strong> Infección que baja al pecho</li>
                        <li>• <strong>Absceso cerebral:</strong> Infección directa en el cerebro</li>
                    </ul>
                </div>
                <p>
                    Estos casos son excepcionales, pero ocurren cada año. Por eso las infecciones dentales con
                    hinchazón facial importante se toman muy en serio.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo se considera una emergencia médica?
                </h2>
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <p className="font-bold text-red-900 mb-3">🚨 Ve a URGENCIAS HOSPITALARIAS si:</p>
                    <ul className="space-y-2 text-red-800">
                        <li>🔴 Hinchazón que crece rápidamente (en horas)</li>
                        <li>🔴 Hinchazón que afecta el ojo o el cuello</li>
                        <li>🔴 Fiebre alta (más de 38.5°C) que no baja</li>
                        <li>🔴 Dificultad para tragar saliva</li>
                        <li>🔴 Dificultad para respirar</li>
                        <li>🔴 Dificultad para abrir la boca (trismo severo)</li>
                        <li>🔴 Malestar general importante, confusión</li>
                    </ul>
                    <p className="text-red-900 font-bold mt-4">Estas son señales de que la infección está extendiéndose y requiere hospitalización.</p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Los enjuagues con sal ayudan?
                </h2>
                <p><strong>Ayudan un poco, pero no resuelven el problema.</strong></p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <h3 className="font-bold text-green-900 mb-2">✅ Qué pueden hacer:</h3>
                        <ul className="text-green-800 text-sm space-y-1">
                            <li>• Ayudar a drenar un poco si hay fístula</li>
                            <li>• Mantener la zona más limpia</li>
                            <li>• Aliviar molestias superficiales</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <h3 className="font-bold text-red-900 mb-2">❌ Qué NO pueden hacer:</h3>
                        <ul className="text-red-800 text-sm space-y-1">
                            <li>• Curar la infección</li>
                            <li>• Reemplazar el tratamiento dental</li>
                            <li>• Evitar que la infección avance</li>
                        </ul>
                    </div>
                </div>
                <p>
                    <strong>Receta básica:</strong> 1 cucharadita de sal en 1 vaso de agua tibia.
                    Enjuagar suavemente 3-4 veces al día. Puede ayudar mientras consigues cita, pero no es reemplazo del tratamiento.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué debo hacer ahora mismo?
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                    <ol className="space-y-3 text-blue-800">
                        <li><strong>1. Evalúa la severidad:</strong> ¿Tienes los síntomas de emergencia mencionados arriba?</li>
                        <li><strong>2. Si es emergencia:</strong> Ve a urgencias hospitalarias ahora</li>
                        <li><strong>3. Si es moderado:</strong> Llama al dentista para cita urgente (hoy o mañana)</li>
                        <li><strong>4. Mientras esperas:</strong> Analgésicos, enjuagues con agua y sal, mantén la cabeza elevada</li>
                        <li><strong>5. NO te automediques con antibióticos</strong> (ver artículo sobre antibióticos)</li>
                    </ol>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    Una infección dental <strong>siempre necesita tratamiento profesional</strong>. No desaparece sola,
                    solo se "calma" temporalmente para volver después.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>La regla:</strong> Entre más temprano trates una infección, más simple es el tratamiento.
                    Esperar solo hace las cosas más complicadas, costosas y potencialmente peligrosas.
                </div>
            </ArticleLayout>
        </>
    );
}
