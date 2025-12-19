import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Cuánto dura la hinchazón después de sacar las muelas del juicio? | Dr. Carlos Beiner',
    description: 'Expectativas realistas sobre la hinchazón post-operatoria, qué es normal y cuándo preocuparse. Guía completa del Dr. Carlos Beiner.',
};

export default function CuantoDuraHinchazon() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: 'Hinchazón post-operatoria' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        {
            title: '¿Si no me duelen, es necesario sacarlas igual?',
            href: '/tratamientos/muelas-del-juicio/guias/si-no-duelen'
        },
        {
            title: 'Recuperación rápida: consejos prácticos',
            href: '/tratamientos/muelas-del-juicio/guias/recuperacion-rapida'
        }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cuántos días estaré hinchado después de sacar las muelas del juicio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La hinchazón alcanza su punto máximo entre las 48-72 horas después de la cirugía. Normalmente comienza a bajar del día 4 al 5, y debería estar casi totalmente desaparecida entre el día 7 y 10. Sin embargo, cada persona es diferente."
                }
            },
            {
                "@type": "Question",
                "name": "¿Es normal que un lado se hinche más que el otro?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, es completamente normal. No siempre la hinchazón es simétrica. Puede depender de qué muelas estaban más impactadas, el tiempo de cirugía de cada lado, y la posición en que duermes. Si un lado duele mucho más o la hinchazón aumenta después del día 3, consulta."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuándo puedo volver a trabajar o estudiar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende del tipo de trabajo. Si es trabajo de oficina o desde casa, puedes volver en 2-3 días. Si implica esfuerzo físico, es mejor esperar 5-7 días. La hinchazón puede ser notoria para otros durante los primeros 3-4 días."
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
                title="¿Cuánto dura la hinchazón después de sacar las muelas del juicio?"
                description="Expectativas realistas sobre la hinchazón post-operatoria, qué es normal y cuándo preocuparse. Guía completa del Dr. Carlos Beiner."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-blue-900 mb-2">
                        💡 La respuesta corta
                    </p>
                    <p className="text-blue-800">
                        La hinchazón alcanza su <strong>punto máximo a las 48-72 horas</strong> después de la cirugía.
                        Empieza a bajar del día 4-5 y debería desaparecer casi completamente entre el día 7-10.
                        Es completamente normal y no significa que algo esté mal.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuántos días estaré hinchado?
                </h2>
                <p>
                    Esta es la pregunta que todos hacen antes de la cirugía, y la respuesta corta es: <strong>entre 5 y 7 días</strong> en promedio.
                </p>
                <p>
                    Pero hay una curva predecible de cómo evoluciona la hinchazón:
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-4">📊 Cronología de la hinchazón</h3>
                    <ul className="space-y-3">
                        <li><strong>Día 1 (cirugía):</strong> Hinchazón leve o ausente. Aparece gradualmente durante la noche.</li>
                        <li><strong>Día 2:</strong> La hinchazón empieza a aumentar notoriamente.</li>
                        <li><strong>Día 3:</strong> Punto máximo de hinchazón. Este es el día "más chipmunk" (cara de hámster).</li>
                        <li><strong>Días 4-5:</strong> La hinchazón comienza a bajar lentamente.</li>
                        <li><strong>Días 6-7:</strong> Hinchazón notablemente reducida, pero aún visible.</li>
                        <li><strong>Días 8-10:</strong> Casi totalmente desaparecida.</li>
                    </ul>
                </div>

                <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    ⚠️ <strong>Importante:</strong> Si la hinchazón sigue creciendo después del día 3-4,
                    o viene acompañada de fiebre o mal olor, contacta inmediatamente a tu dentista.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Es normal que un lado se hinche más que el otro?
                </h2>
                <p>
                    <strong>Sí, es completamente normal.</strong> Muy pocas veces la hinchazón es perfectamente simétrica.
                </p>
                <p>
                    Las razones por las que un lado puede hincharse más:
                </p>
                <ul>
                    <li>✅ Una muela estaba más impactada o requirió más manipulación</li>
                    <li>✅ El tiempo de cirugía fue más largo de ese lado</li>
                    <li>✅ Dormiste más de ese lado las primeras noches</li>
                    <li>✅ Simplemente tu cuerpo reacciona así (variabilidad individual)</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-2">🚨 Cuándo SÍ preocuparse:</h3>
                    <p className="text-red-800 mb-2">Si un lado:</p>
                    <ul className="space-y-1 text-red-800">
                        <li>• Duele mucho más y el dolor empeora (no mejora) con el pasar de los días</li>
                        <li>• Está caliente al tacto y la hinchazón continúa creciendo después del día 4</li>
                        <li>• Hay pus, mal sabor o mal olor</li>
                        <li>• Tienes fiebre (más de 38°C)</li>
                    </ul>
                    <p className="text-red-800 font-semibold mt-3">
                        → Estos son signos de posible infección. Contacta a tu dentista.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo puedo volver a trabajar o estudiar?
                </h2>
                <p>
                    Depende de dos factores: <strong>el tipo de actividad</strong> y <strong>tu tolerancia social a la hinchazón</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-green-900 mb-3">✅ Trabajo de oficina / estudio</h3>
                        <p className="text-green-800">
                            <strong>2-3 días</strong> es razonable. Puedes trabajar desde casa con videollamadas si la hinchazón
                            te incomoda estéticamente.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-amber-900 mb-3">⚠️ Trabajo físico</h3>
                        <p className="text-amber-800">
                            <strong>5-7 días.</strong> Levantar peso, agacharte mucho o hacer esfuerzo físico puede causar
                            sangrado o aumentar la hinchazón.
                        </p>
                    </div>
                </div>

                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    💡 <strong>Dato útil:</strong> La hinchazón será muy notoria para otras personas durante los primeros 3-4 días.
                    Si tu trabajo requiere atención al público, considera tomar al menos 4 días.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuándo puedo hacer ejercicio o ir al gym?
                </h2>
                <p>
                    <strong>Ejercicio ligero (caminar):</strong> Desde el día 2-3, sin problema.
                </p>
                <p>
                    <strong>Ejercicio moderado (trotar, pesas ligeras):</strong> Espera 5-7 días.
                </p>
                <p>
                    <strong>Ejercicio intenso (HIIT, CrossFit, pesas pesadas):</strong> Espera 10-14 días.
                </p>

                <p className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                    ⚠️ <strong>¿Por qué esperar?</strong> El esfuerzo físico aumenta la presión arterial,
                    lo que puede causar <strong>sangrado tardío</strong> o retrasar la cicatrización.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué ayuda a desinflamar más rápido?
                </h2>
                <p>
                    Aquí están las estrategias que realmente funcionan:
                </p>

                <div className="space-y-4 my-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🧊 1. Hielo las primeras 48 horas</h3>
                        <p className="text-neutral-700">
                            Aplica frío (bolsa de hielo envuelta en tela) 20 minutos, descansa 20 minutos.
                            Repite varias veces al día. <strong>Solo funciona las primeras 48 horas.</strong>
                        </p>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🔥 2. Calor después del día 3</h3>
                        <p className="text-neutral-700">
                            Del día 3 en adelante, aplica calor húmedo (toalla tibia) para ayudar a que circule la sangre
                            y se reabsorba la inflamación más rápido.
                        </p>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">💊 3. Antiinflamatorios (si te indicaron)</h3>
                        <p className="text-neutral-700">
                            El ibuprofeno u otros AINEs reducen la inflamación. <strong>Sigue las indicaciones de tu dentista</strong>
                            sobre dosis y horarios.
                        </p>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-xl p-5">
                        <h3 className="font-semibold text-lg text-neutral-900 mb-2">🛏️ 4. Dormir con la cabeza elevada</h3>
                        <p className="text-neutral-700">
                            Usa 2-3 almohadas para que tu cabeza esté más alta que el corazón. Esto reduce la acumulación de líquido facial.
                        </p>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿La hinchazón es signo de infección?
                </h2>
                <p>
                    <strong>No necesariamente.</strong> La hinchazón es parte normal de la respuesta inflamatoria del cuerpo a la cirugía.
                </p>
                <p>
                    El problema es cuando la hinchazón viene acompañada de otros síntomas:
                </p>

                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-red-900 mb-3">🚨 Signos de infección:</h3>
                    <ul className="space-y-2 text-red-800">
                        <li>• Fiebre persistente (más de 38°C)</li>
                        <li>• Hinchazón que <strong>aumenta</strong> después del día 3-4 (en vez de reducirse)</li>
                        <li>• Dolor que empeora en vez de mejorar</li>
                        <li>• Pus o drenaje con mal olor</li>
                        <li>• Mal sabor en la boca que no mejora con enjuagues</li>
                        <li>• Dificultad para abrir la boca que empeora</li>
                    </ul>
                    <p className="text-red-900 font-bold mt-4">
                        → Si presentas 2 o más de estos síntomas, contacta a tu dentista inmediatamente.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    Conclusión
                </h2>
                <p>
                    La hinchazón después de sacar las muelas del juicio es <strong>completamente normal</strong> y predecible:
                </p>
                <ul>
                    <li>📅 Punto máximo: día 2-3</li>
                    <li>📅 Empieza a bajar: día 4-5</li>
                    <li>📅 Casi desaparecida: día 7-10</li>
                </ul>
                <p>
                    Lo más importante es seguir las indicaciones post-operatorias de tu dentista y <strong>tener paciencia</strong>.
                    Tu cuerpo está sanando correctamente.
                </p>

                <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>Recomendación final:</strong> Si la hinchazón sigue el patrón normal (sube hasta el día 3 y
                    luego baja), no hay de qué preocuparse. Es solo cuestión de tiempo.
                </p>
            </ArticleLayout>
        </>
    );
}
