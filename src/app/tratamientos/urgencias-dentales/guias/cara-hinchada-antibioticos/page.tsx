import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cara hinchada: ¿puedo tomar antibióticos sin ir al dentista? | Dr. Carlos Beiner',
    description: 'Por qué la automedicación con antibióticos es peligrosa y qué es lo que realmente necesitas.',
};

export default function CaraHinchadaAntibioticos() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: 'Cara hinchada y antibióticos' }
    ];

    const backLink = {
        label: '← Volver a Urgencias Dentales',
        href: '/tratamientos/urgencias-dentales'
    };

    const relatedArticles = [
        { title: '¿Es urgencia real?', href: '/tratamientos/urgencias-dentales/guias/es-urgencia-real' },
        { title: 'Infección dental: ¿cuánto esperar?', href: '/tratamientos/urgencias-dentales/guias/infeccion-cuanto-esperar' }
    ];

    // Schema FAQ (extracted from content)
    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Puedo tomar antibióticos sin ir al dentista si tengo la cara hinchada?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Los antibióticos solos no eliminan una infección dental si no se trata la causa (el diente). Automedicarse puede generar resistencia y ocultar síntomas graves."
                }
            },
            {
                "@type": "Question",
                "name": "¿Los antibióticos curan el absceso dental?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No completamente. El antibiótico ayuda a contener la infección, pero si no se drena el pus y se trata el diente, la infección volverá."
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
                title="Tengo la cara hinchada: ¿puedo tomar antibióticos solo sin ir al dentista?"
                description="Por qué la automedicación con antibióticos es peligrosa y qué es lo que realmente necesitas."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-red-900 mb-2">⚠️ Respuesta directa</p>
                    <p className="text-red-800">
                        <strong>No.</strong> Los antibióticos solos NO eliminan una infección dental. Pueden aliviar
                        temporalmente, pero el problema volverá si no se trata la <strong>causa</strong> (el diente infectado).
                        Además, automedicarse con antibióticos es peligroso y contribuye a la resistencia bacteriana.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Por qué la automedicación es peligrosa?
                </h2>
                <div className="space-y-4 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">1. No sabes qué bacteria es</h3>
                        <p className="text-neutral-700">Diferentes infecciones requieren diferentes antibióticos. Tomar el incorrecto es como usar la llave equivocada.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">2. Te da falsa sensación de mejoría</h3>
                        <p className="text-neutral-700">Puedes sentirte mejor temporalmente mientras la infección sigue creciendo en el hueso.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">3. Generas resistencia bacteriana</h3>
                        <p className="text-neutral-700">Usar antibióticos incorrectamente hace que las bacterias se vuelvan más fuertes y difíciles de tratar en el futuro.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">4. Puedes tener efectos adversos</h3>
                        <p className="text-neutral-700">Alergias, problemas digestivos, interacciones con otros medicamentos.</p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Los antibióticos eliminan la infección dental?
                </h2>
                <p><strong>No completamente.</strong> Aquí está el problema:</p>
                <p>
                    La infección dental (absceso) es una acumulación de pus causada por bacterias en el interior
                    del diente o alrededor de la raíz. El antibiótico puede matar bacterias en la sangre y tejidos,
                    pero <strong>no puede llegar al centro de la infección encapsulada</strong>.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Analogía:</strong> Es como tratar de secar una habitación inundada sin cerrar la llave del agua.
                    Puedes sacar el agua con baldes (antibiótico), pero si no cierras la llave (tratar el diente),
                    el agua sigue entrando.
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué pasa si la infección no se drena?
                </h2>
                <p>La infección dental que no se trata puede:</p>
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <ul className="space-y-2 text-red-800">
                        <li>🔴 <strong>Extenderse a espacios profundos</strong> del cuello y mediastino</li>
                        <li>🔴 <strong>Causar sepsis</strong> (infección generalizada en la sangre)</li>
                        <li>🔴 <strong>Dificultar la respiración</strong> si cierra la vía aérea</li>
                        <li>🔴 <strong>Llegar al cerebro</strong> en casos extremos (absceso cerebral)</li>
                        <li>🔴 <strong>Poner en riesgo tu vida</strong> - las infecciones odontogénicas siguen causando muertes</li>
                    </ul>
                    <p className="text-red-900 font-bold mt-4">Esto puede sonar alarmista, pero es la realidad de infecciones dentales mal manejadas.</p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuál es el tratamiento correcto?
                </h2>
                <p>El tratamiento de una infección dental tiene pasos específicos:</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ol className="space-y-4">
                        <li><strong>1. Diagnóstico:</strong> Determinar cuál es el diente afectado y qué tan extendida está la infección.</li>
                        <li><strong>2. Drenaje:</strong> Si hay absceso fluctuante, hay que drenarlo (sacar el pus). Esta es la parte más importante.</li>
                        <li><strong>3. Tratamiento del diente:</strong> Dependiendo del caso:
                            <ul className="ml-4 mt-2">
                                <li>• Endodoncia (tratamiento de conducto) para salvar el diente</li>
                                <li>• Extracción si el diente no es salvable</li>
                            </ul>
                        </li>
                        <li><strong>4. Antibióticos (si son necesarios):</strong> Como complemento, no como único tratamiento.</li>
                    </ol>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo SÍ está bien tomar antibióticos antes de ver al dentista?
                </h2>
                <p>Hay situaciones específicas donde puede ser aceptable:</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                    <ul className="space-y-2 text-green-800">
                        <li>✅ <strong>Si tu dentista te los indicó por teléfono</strong> mientras esperas la cita (de urgencia)</li>
                        <li>✅ <strong>Si un médico los recetó</strong> después de evaluarte en urgencias</li>
                        <li>✅ <strong>Para estabilizar</strong> una infección muy aguda antes de un procedimiento</li>
                    </ul>
                    <p className="text-green-900 mt-4">En estos casos, los antibióticos son un <strong>complemento temporal</strong>, no el tratamiento definitivo.</p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué debo hacer si tengo la cara hinchada ahora?
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                    <ol className="space-y-3 text-blue-800">
                        <li><strong>1. Evalúa la severidad:</strong> ¿Puedes tragar normalmente? ¿Respirar sin problema? ¿Tienes fiebre alta?</li>
                        <li><strong>2. Si hay señales graves</strong> → Urgencias hospitalarias inmediatamente</li>
                        <li><strong>3. Si es moderado</strong> → Contacta a tu dentista para cita de urgencia hoy o mañana</li>
                        <li><strong>4. Mientras tanto:</strong> Puedes tomar analgésicos (no aspirina), aplicar frío exterior, mantener la cabeza elevada</li>
                        <li><strong>5. NO tomes antibióticos</strong> que tengas en casa sin indicación profesional</li>
                    </ol>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    La cara hinchada por infección dental requiere <strong>tratamiento profesional</strong>, no solo antibióticos.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                    ⚠️ <strong>Recuerda:</strong> Los antibióticos pueden disminuir los síntomas temporalmente, pero la infección
                    sigue ahí. Sin drenaje y tratamiento del diente, volverá... y posiblemente peor.
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>Acción correcta:</strong> Consulta a tu dentista lo antes posible. Una infección dental
                    tratada a tiempo es sencilla de resolver. Una ignorada puede volverse peligrosa.
                </div>
            </ArticleLayout>
        </>
    );
}
