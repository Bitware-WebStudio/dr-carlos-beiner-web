import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Me pueden sacar las 4 muelas del juicio en una sola sesión? | Dr. Carlos Beiner',
    description: 'Ventajas, consideraciones y qué esperar si decides extraer las 4 muelas del juicio de una vez.',
};

export default function CuatroMuelasMismaSesion() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: '4 muelas en una sesión' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        { title: '¿Cuánto dura la hinchazón?', href: '/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon' },
        { title: '¿Riesgo de pérdida de sensibilidad?', href: '/tratamientos/muelas-del-juicio/guias/riesgo-sensibilidad' }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Es seguro sacar las 4 muelas del juicio juntas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, es seguro y es lo más común. De hecho, el Dr. Carlos Beiner recomienda sacar las 4 muelas en una sola sesión cuando es posible. Un solo procedimiento, una sola anestesia, una sola recuperación."
                }
            },
            {
                "@type": "Question",
                "name": "¿Duele más sacar las 4 juntas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No durante el procedimiento, porque estarás completamente anestesiado. Después, la hinchazón y molestias serán mayores que si sacaras solo una o dos, pero la ventaja es que pasas por el proceso de recuperación una sola vez."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuántos días de reposo necesito?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para las 4 muelas juntas, planifica 4-5 días de reposo relativo. Los primeros 3 días serán los más incómodos. Puedes volver a actividades ligeras del día 4-5 en adelante."
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
                title="¿Me pueden sacar las 4 muelas del juicio en una sola sesión?"
                description="Ventajas, consideraciones y qué esperar si decides extraer las 4 muelas del juicio de una vez."
                breadcrumbs={breadcrumbs}
                backLink={backLink}
                relatedArticles={relatedArticles}
            >
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                    <p className="text-lg font-semibold text-green-900 mb-2">✅ Respuesta corta</p>
                    <p className="text-green-800">
                        <strong>Sí, es posible y generalmente recomendado.</strong> Sacar las 4 muelas del juicio en una sola sesión
                        significa un solo procedimiento, una sola anestesia, una sola recuperación. Es más eficiente y cómodo
                        para la mayoría de los pacientes.
                    </p>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Es seguro sacar las 4 muelas juntas?
                </h2>
                <p>
                    <strong>Absolutamente.</strong> Es una práctica estándar en cirugía bucal y es lo que el Dr. Carlos Beiner
                    recomienda en la mayoría de los casos.
                </p>
                <p>La lógica es simple:</p>
                <ul>
                    <li>✅ Una sola visita al dentista</li>
                    <li>✅ Una sola anestesia</li>
                    <li>✅ Un solo período de recuperación</li>
                    <li>✅ Un solo ciclo de medicamentos</li>
                    <li>✅ Un solo permiso de trabajo/estudio</li>
                </ul>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Dato importante:</strong> En pacientes jóvenes y sanos (18-30 años), sacar las 4 muelas juntas
                    es prácticamente el estándar. Solo se hacen en etapas cuando hay razones específicas.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿En qué casos se recomienda hacerlo por etapas?
                </h2>
                <p>Hay algunas situaciones donde tu dentista podría sugerir sacar las muelas en 2 sesiones:</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ul className="space-y-3">
                        <li><strong>🔹 Muelas muy complicadas:</strong> Si las 4 muelas están severamente impactadas y cada una requiere una cirugía extensa.</li>
                        <li><strong>🔹 Ansiedad extrema:</strong> Si el paciente tiene mucho miedo y prefiere sesiones más cortas.</li>
                        <li><strong>🔹 Condiciones médicas:</strong> Pacientes con problemas de coagulación, diabetes descontrolada, etc.</li>
                        <li><strong>🔹 Agenda del paciente:</strong> Si no puede tomarse varios días libres y prefiere recuperarse "de a poco".</li>
                    </ul>
                </div>
                <p>
                    En estos casos, lo más común es hacer las 2 del lado derecho primero (una arriba, una abajo),
                    esperar 2-3 semanas, y luego las 2 del lado izquierdo. Así puedes comer del lado que no está operado.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Duele más sacar las 4 juntas?
                </h2>
                <p><strong>Durante el procedimiento:</strong> No. Estarás completamente anestesiado.</p>
                <p><strong>Después del procedimiento:</strong> Sí, será más incómodo que si solo sacaras una o dos.</p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-amber-900 mb-3">Sacar las 4 juntas</h3>
                        <ul className="text-amber-800 space-y-1">
                            <li>• Mayor hinchazón (ambos lados)</li>
                            <li>• No puedes "comer del otro lado"</li>
                            <li>• Recuperación más intensa</li>
                            <li>• PERO: Solo pasas por esto UNA vez</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="font-bold text-lg text-blue-900 mb-3">Sacar en 2 etapas</h3>
                        <ul className="text-blue-800 space-y-1">
                            <li>• Menos hinchazón cada vez</li>
                            <li>• Puedes comer del lado no operado</li>
                            <li>• Cada recuperación es más suave</li>
                            <li>• PERO: Pasas por el proceso DOS veces</li>
                        </ul>
                    </div>
                </div>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Qué tipo de anestesia se usa?
                </h2>
                <p>
                    Para la mayoría de las extracciones de muelas del juicio (incluso las 4 juntas),
                    se usa <strong>anestesia local</strong>. Es la misma que usas para cualquier procedimiento dental.
                </p>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 my-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-4">Opciones de anestesia:</h3>
                    <ul className="space-y-3">
                        <li><strong>Anestesia local (lo más común):</strong> Estás despierto pero no sientes dolor. Es segura, efectiva y de recuperación inmediata.</li>
                        <li><strong>Sedación consciente + anestesia local:</strong> Te dan medicamentos para relajarte y "desconectarte". Estás despierto pero no recuerdas casi nada. Requiere acompañante.</li>
                        <li><strong>Anestesia general (raro):</strong> Solo para casos muy complejos o pacientes con necesidades especiales. Se hace en pabellón.</li>
                    </ul>
                </div>
                <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    ✅ <strong>Lo que usa el Dr. Carlos Beiner:</strong> Anestesia local de alta eficacia.
                    La mayoría de los pacientes reportan que "no sintieron nada" durante el procedimiento.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Cuántos días de reposo real necesito?
                </h2>
                <p>Para las 4 muelas juntas, aquí está la cronología típica:</p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                    <ul className="space-y-3">
                        <li><strong>Día 1 (día de la cirugía):</strong> Reposo total. Hielo, medicamentos, dieta líquida/blanda.</li>
                        <li><strong>Días 2-3:</strong> Los más incómodos. Hinchazón en su punto máximo. Reposo en casa.</li>
                        <li><strong>Días 4-5:</strong> Empiezas a mejorar. Puedes hacer actividades ligeras.</li>
                        <li><strong>Día 7:</strong> La mayoría puede retomar actividades normales (excepto ejercicio intenso).</li>
                    </ul>
                </div>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                    💡 <strong>Recomendación práctica:</strong> Si trabajas de lunes a viernes, agenda la cirugía un
                    jueves o viernes y tendrás el fin de semana para los primeros días de recuperación.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                    ¿Por qué algunos dentistas prefieren hacerlo por etapas?
                </h2>
                <p>Hay distintas escuelas de pensamiento:</p>
                <ul>
                    <li><strong>Enfoque conservador:</strong> Algunos dentistas prefieren ser cautelosos y hacer menos intervención por sesión.</li>
                    <li><strong>Disponibilidad de tiempo:</strong> No todos los dentistas tienen el tiempo en agenda para hacer las 4 juntas.</li>
                    <li><strong>Comodidad del paciente:</strong> Algunos pacientes expresan que prefieren sesiones más cortas.</li>
                </ul>
                <p className="mt-4">
                    El Dr. Carlos Beiner, con su experiencia en cirugía bucal, generalmente recomienda las 4 juntas
                    cuando el caso lo permite. Es más eficiente tanto para el paciente como para el proceso de curación.
                </p>

                <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
                <p>
                    Sacar las 4 muelas del juicio en una sola sesión es <strong>seguro, común y generalmente la mejor opción</strong>
                    para pacientes jóvenes y sanos.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                    ✅ <strong>La ventaja principal:</strong> Solo pasas por el proceso de anestesia, cirugía y recuperación
                    UNA vez. Aunque esos días sean más intensos, después ya está todo resuelto.
                </div>
            </ArticleLayout>
        </>
    );
}
