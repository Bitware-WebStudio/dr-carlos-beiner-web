import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Existe riesgo de perder sensibilidad al sacar muelas del juicio? | Dr. Carlos Beiner',
    description: 'Entendiendo el nervio dentario, los riesgos reales y cómo la tecnología 3D minimiza complicaciones.',
};

export default function RiesgoPerdidaSensibilidad() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: 'Riesgo de pérdida de sensibilidad' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        { title: 'Si no duelen, ¿sacarlas?', href: '/tratamientos/muelas-del-juicio/guias/si-no-duelen' },
        { title: '¿4 muelas en una sesión?', href: '/tratamientos/muelas-del-juicio/guias/4-muelas-misma-sesion' }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es el nervio dentario inferior?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Es el nervio que pasa por el interior de la mandíbula y da sensibilidad al labio inferior, mentón y encía. Las raíces de las muelas del juicio inferiores pueden estar muy cerca o incluso tocar este nervio."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué tan frecuente es la pérdida de sensibilidad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La alteración temporal de la sensibilidad ocurre en menos del 5% de los casos. La pérdida permanente es muy rara, menos del 1%. Con tecnología 3D y técnicas modernas, este riesgo se minimiza significativamente."
                }
            },
            {
                "@type": "Question",
                "name": "¿La pérdida de sensibilidad es permanente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En la gran mayoría de los casos, no. Si hay alteración de la sensibilidad, generalmente se recupera en semanas o meses. Solo en casos muy raros (menos del 1%) puede ser permanente."
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
                title="¿Existe riesgo de perder sensibilidad al sacar las muelas del juicio?"
                description="Entendiendo el nervio dentario, los riesgos reales y cómo la tecnología 3D minimiza complicaciones."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-blue-900 mb-2">💡 La respuesta honesta</p>
                    <p className="text-blue-800">
                        Sí existe un riesgo, pero es <strong>bajo</strong>. La alteración temporal de sensibilidad ocurre en
                        menos del 5% de los casos, y la pérdida permanente en menos del 1%. Con <strong>tecnología 3D</strong>
                        y un cirujano experimentado, este riesgo se minimiza significativamente.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué es el nervio dentario inferior?
                </h2>
                <p>
                    El <strong>nervio dentario inferior</strong> (o nervio alveolar inferior) es un nervio que recorre
                    el interior de la mandíbula, dentro de un "túnel" óseo llamado conducto mandibular.
                </p>
                <p>Este nervio es responsable de dar sensibilidad a:</p>
                <ul>
                    <li>✅ Labio inferior (de ese lado)</li>
                    <li>✅ Mentón</li>
                    <li>✅ Encía inferior</li>
                    <li>✅ Dientes inferiores</li>
                </ul>
                <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    ⚠️ <strong>¿Por qué importa?</strong> Las raíces de las muelas del juicio inferiores pueden
                    estar muy cerca de este nervio. En algunos casos, las raíces incluso lo tocan o rodean.
                </p>
                <p>
                    También existe el <strong>nervio lingual</strong>, que da sensibilidad a la lengua y puede
                    verse afectado durante la extracción, aunque es menos común.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué tan frecuente es la pérdida de sensibilidad?
                </h2>
                <p>Hablemos con números reales (basados en estudios clínicos):</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-4">📊 Estadísticas reales:</h3>
                    <ul className="space-y-3">
                        <li><strong>Alteración TEMPORAL:</strong> 1-5% de los casos. La sensibilidad vuelve en semanas o meses.</li>
                        <li><strong>Alteración PERMANENTE:</strong> Menos del 1% (0.5-0.9% según estudios).</li>
                        <li><strong>Afectación del nervio lingual:</strong> 0.1-0.5% de los casos.</li>
                    </ul>
                </div>
                <p>
                    <strong>En otras palabras:</strong> De cada 100 extracciones de muelas del juicio, aproximadamente
                    2-3 pacientes tendrán alguna alteración temporal de la sensibilidad, y de esos, la gran mayoría
                    se recuperará completamente.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cómo ayuda la tecnología 3D a prevenir esto?
                </h2>
                <p>
                    El <strong>Scanner 3D (CBCT - Cone Beam CT)</strong> es un avance fundamental en la cirugía
                    de muelas del juicio. A diferencia de las radiografías tradicionales (que son 2D), el scanner
                    muestra exactamente dónde está el nervio en las 3 dimensiones.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-red-900 mb-3">❌ Radiografía 2D tradicional</h3>
                        <ul className="text-red-800 space-y-1">
                            <li>• Imagen plana</li>
                            <li>• No muestra profundidad</li>
                            <li>• Difícil ver si la raíz toca el nervio</li>
                            <li>• Mayor incertidumbre para el cirujano</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-green-900 mb-3">✅ Scanner 3D (CBCT)</h3>
                        <ul className="text-green-800 space-y-1">
                            <li>• Imagen tridimensional completa</li>
                            <li>• Muestra exactamente la relación raíz-nervio</li>
                            <li>• Permite planificar la mejor estrategia</li>
                            <li>• Reduce significativamente el riesgo</li>
                        </ul>
                    </div>
                </div>
                <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    ✅ <strong>El Dr. Carlos Beiner usa scanner 3D</strong> cuando las radiografías muestran que la
                    muela está cerca del nervio. Esto permite ver exactamente la relación anatómica y elegir la
                    técnica más segura.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿La pérdida de sensibilidad es permanente?
                </h2>
                <p><strong>En la gran mayoría de los casos, NO.</strong></p>
                <p>Si hay alguna alteración de la sensibilidad después de la cirugía, típicamente evoluciona así:</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ul className="space-y-3">
                        <li><strong>Primeras semanas:</strong> Hormigueo, adormecimiento o sensación "rara" en el labio/mentón.</li>
                        <li><strong>1-3 meses:</strong> La sensibilidad va volviendo gradualmente.</li>
                        <li><strong>3-6 meses:</strong> La mayoría de los casos se resuelven completamente.</li>
                        <li><strong>6-12 meses:</strong> Si no ha vuelto para este punto, hay mayor probabilidad de que sea permanente.</li>
                    </ul>
                </div>
                <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Dato importante:</strong> El nervio es un tejido que puede regenerarse, pero lo hace
                    lentamente. Por eso la recuperación puede tomar meses. La mayoría de las alteraciones temporales
                    se resuelven completamente.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué se siente exactamente si pasa?
                </h2>
                <p>Si hay afectación del nervio dentario, podrías experimentar:</p>
                <ul>
                    <li>🔹 <strong>Adormecimiento:</strong> Como si la anestesia no pasara en el labio inferior.</li>
                    <li>🔹 <strong>Hormigueo:</strong> Sensación de "piquetitos" o "electricidad".</li>
                    <li>🔹 <strong>Disminución de sensibilidad:</strong> Sientes menos cuando te tocas el labio o mentón.</li>
                    <li>🔹 <strong>Hipersensibilidad:</strong> En algunos casos, la zona se vuelve más sensible de lo normal.</li>
                </ul>
                <p className="mt-4">
                    <strong>NO es una parálisis.</strong> El nervio dentario es solo sensitivo, no motor. No afecta
                    el movimiento de la boca ni la expresión facial.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cómo reduce el Dr. Carlos Beiner este riesgo?
                </h2>
                <div className="space-y-4 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">1. Evaluación con imágenes 3D</h3>
                        <p className="text-neutral-700">Cuando la radiografía muestra proximidad al nervio, se solicita scanner 3D para planificación precisa.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">2. Técnica quirúrgica cuidadosa</h3>
                        <p className="text-neutral-700">15+ años de experiencia en cirugía bucal, con técnicas que minimizan el contacto con estructuras nerviosas.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">3. Coronectomía cuando es necesario</h3>
                        <p className="text-neutral-700">En casos de altísimo riesgo, se puede optar por extraer solo la corona de la muela y dejar la raíz (que es segura si está sana).</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">4. Comunicación honesta</h3>
                        <p className="text-neutral-700">Si tu caso tiene riesgo elevado, se te explicará antes del procedimiento para que puedas tomar una decisión informada.</p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    Sí, existe un riesgo de alteración de la sensibilidad al sacar muelas del juicio, especialmente
                    las inferiores. Pero con la <strong>tecnología actual y un cirujano experimentado</strong>,
                    este riesgo es muy bajo.
                </p>
                <ul>
                    <li>📊 Alteración temporal: 1-5% de los casos</li>
                    <li>📊 Permanente: menos del 1%</li>
                    <li>📊 Con scanner 3D: el riesgo se reduce aún más</li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>La clave:</strong> Elige un cirujano con experiencia que use tecnología moderna
                    y que te explique honestamente tu caso particular.
                </div>
            </ArticleLayout>
        </>
    );
}
