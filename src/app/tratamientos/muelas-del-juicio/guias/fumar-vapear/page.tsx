import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Puedo fumar o vapear después de sacar las muelas del juicio? | Dr. Carlos Beiner',
    description: 'Por qué fumar es el enemigo número uno de una buena recuperación y cómo evitar la temida alveolitis seca.',
};

export default function FumarVapearDespues() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: 'Fumar o vapear después' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        { title: '¿Cuánto dura la hinchazón?', href: '/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon' },
        { title: 'Recuperación rápida: consejos', href: '/tratamientos/muelas-del-juicio/guias/recuperacion-rapida' }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es la alveolitis seca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La alveolitis seca (dry socket) ocurre cuando el coágulo de sangre que protege el hueso después de la extracción se desaloja o no se forma correctamente. Sin este coágulo, el hueso y los nervios quedan expuestos, causando dolor intenso. Fumar es la causa más común."
                }
            },
            {
                "@type": "Question",
                "name": "¿Por qué fumar empeora la cicatrización?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La succión al fumar puede desalojar el coágulo. La nicotina reduce el flujo sanguíneo, lo que retrasa la cicatrización. El humo contiene químicos tóxicos que irritan la herida. El calor del humo daña los tejidos en cicatrización."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuántos días debo esperar antes de fumar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El mínimo absoluto son 72 horas (3 días), pero lo ideal es esperar 7 días o más. Mientras más esperes, mejor. El riesgo de alveolitis seca es mayor en los primeros 3-4 días cuando el coágulo aún está vulnerable."
                }
            },
            {
                "@type": "Question",
                "name": "¿El vapeo es igual de dañino que el cigarrillo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El vapeo es igual o incluso más peligroso para la cicatrización. Aunque no tiene humo, la succión es más intensa y prolongada, lo que aumenta el riesgo de desalojar el coágulo. Además, la nicotina sigue reduciendo el flujo sanguíneo."
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
                title="¿Puedo fumar o vapear después de una extracción dental?"
                description="Por qué fumar es el enemigo número uno de una buena recuperación y cómo evitar la temida alveolitis seca."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-red-900 mb-2">⚠️ Respuesta directa</p>
                    <p className="text-red-800">
                        <strong>No.</strong> No deberías fumar ni vapear durante al menos <strong>72 horas</strong> (mínimo absoluto).
                        Lo ideal es esperar <strong>7 días o más</strong>. Fumar después de una extracción aumenta dramáticamente
                        el riesgo de una complicación muy dolorosa llamada <strong>alveolitis seca</strong>.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué es la alveolitis seca y por qué es peligrosa?
                </h2>
                <p>
                    La <strong>alveolitis seca</strong> (también conocida como "dry socket" o "osteítis alveolar") es una de las
                    complicaciones más dolorosas que pueden ocurrir después de sacar una muela del juicio.
                </p>
                <p><strong>¿Qué pasa exactamente?</strong></p>
                <p>
                    Después de una extracción, se forma un <strong>coágulo de sangre</strong> en el espacio donde estaba la muela.
                    Este coágulo es como un "vendaje biológico" que protege el hueso y los nervios expuestos mientras sana la herida.
                </p>
                <p>
                    Si el coágulo se desaloja, se disuelve o no se forma correctamente, el <strong>hueso y los nervios quedan expuestos</strong>
                    al aire, la comida y los líquidos. Esto causa:
                </p>
                <ul>
                    <li>🔴 Dolor intenso que no mejora con analgésicos normales</li>
                    <li>🔴 Dolor que puede irradiarse al oído, ojo o cuello del mismo lado</li>
                    <li>🔴 Mal olor y mal sabor en la boca</li>
                    <li>🔴 Hueso visible de color blanquecino en la herida</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Dato importante:</strong> La alveolitis seca típicamente aparece entre el día 2 y 4 después de la extracción.
                    Si ya pasaste esos días sin problemas, el riesgo baja significativamente.
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Por qué fumar empeora la cicatrización?
                </h2>
                <p>Fumar ataca la cicatrización desde varios frentes:</p>
                <div className="space-y-4 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🌀 1. La succión desaloja el coágulo</h3>
                        <p className="text-neutral-700">
                            La presión negativa que generas al aspirar el humo puede literalmente "chupar" el coágulo fuera del alveolo.
                            Es como succionar una pajita con demasiada fuerza.
                        </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🩸 2. La nicotina reduce el flujo sanguíneo</h3>
                        <p className="text-neutral-700">
                            La nicotina es un vasoconstrictor: estrecha los vasos sanguíneos. Menos sangre = menos oxígeno y nutrientes
                            para la herida = cicatrización más lenta.
                        </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">☠️ 3. Los químicos del humo son tóxicos</h3>
                        <p className="text-neutral-700">
                            El humo del cigarrillo contiene más de 7,000 químicos. Muchos de ellos irritan directamente la herida abierta
                            y pueden interferir con la formación de nuevo tejido.
                        </p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🔥 4. El calor daña los tejidos</h3>
                        <p className="text-neutral-700">
                            El humo caliente que entra a la boca puede dañar las células nuevas que están tratando de cubrir la herida.
                        </p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuántos días debo esperar antes de fumar?
                </h2>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-4">📅 Tiempos recomendados:</h3>
                    <ul className="space-y-3">
                        <li><span className="font-bold text-red-600">❌ 0-72 horas:</span> PROHIBIDO. Riesgo máximo de alveolitis seca.</li>
                        <li><span className="font-bold text-amber-600">⚠️ 3-7 días:</span> Todavía hay riesgo significativo. Mejor esperar.</li>
                        <li><span className="font-bold text-green-600">✅ 7+ días:</span> El coágulo ya está más estable. Riesgo reducido.</li>
                        <li><span className="font-bold text-green-700">🎯 14+ días:</span> Ideal. La herida ya está en proceso avanzado de cicatrización.</li>
                    </ul>
                </div>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    💡 <strong>Consejo práctico:</strong> Si fumas mucho y sabes que no podrás aguantar, avísale a tu dentista.
                    Puede darte indicaciones especiales o usar técnicas de sutura que ayuden a proteger mejor el alveolo.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿El vapeo es igual de dañino que el cigarrillo?
                </h2>
                <p><strong>Sí, incluso puede ser peor para la cicatrización.</strong></p>
                <p>Muchas personas creen que el vapeo es "más seguro" porque no hay combustión ni humo real. Pero en términos de recuperación dental:</p>
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-3">🚨 Por qué el vapeo es igual o más peligroso:</h3>
                    <ul className="space-y-2 text-red-800">
                        <li><strong>1. Mayor succión:</strong> Los vapers tienden a succionar más fuerte y por más tiempo que con un cigarrillo tradicional.</li>
                        <li><strong>2. Nicotina concentrada:</strong> Muchos líquidos tienen concentraciones de nicotina muy altas.</li>
                        <li><strong>3. Químicos irritantes:</strong> El vapor contiene propilenglicol y glicerina que pueden resecar e irritar la herida.</li>
                        <li><strong>4. Falsa sensación de seguridad:</strong> Las personas vapeaban más seguido pensando que "no es tan malo".</li>
                    </ul>
                </div>
                <p className="font-semibold text-neutral-900">
                    Conclusión: Si vapeas, aplican exactamente las mismas restricciones que para el cigarrillo.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué pasa si no puedo dejar de fumar?
                </h2>
                <p>Si sabes que no podrás resistir la tentación, aquí hay algunas estrategias para reducir el riesgo:</p>
                <div className="space-y-3 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-4">
                        <h3 className="font-semibold text-neutral-900">1. Parches o chicles de nicotina</h3>
                        <p className="text-neutral-700 text-sm">Satisfacen la necesidad de nicotina sin la succión peligrosa.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-4">
                        <h3 className="font-semibold text-neutral-900">2. Si vas a fumar igual</h3>
                        <p className="text-neutral-700 text-sm">Coloca una gasa húmeda sobre la herida y fuma lo menos posible. No es ideal, pero es mejor que nada.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-xl p-4">
                        <h3 className="font-semibold text-neutral-900">3. Enjuaga después</h3>
                        <p className="text-neutral-700 text-sm">Si fumaste, enjuaga suavemente con agua tibia y sal para minimizar los irritantes. Sin hacer buches fuertes.</p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>Fumar o vapear después de sacar las muelas del juicio aumenta significativamente el riesgo de:</p>
                <ul>
                    <li>Alveolitis seca (dolor severo)</li>
                    <li>Infección</li>
                    <li>Cicatrización lenta</li>
                    <li>Complicaciones adicionales</li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>Recomendación:</strong> Usa la cirugía como una oportunidad para tomarte un descanso del tabaco.
                    Una semana sin fumar no solo mejorará tu recuperación, sino que también te demostrará que puedes hacerlo.
                </div>
            </ArticleLayout>
        </>
    );
}
