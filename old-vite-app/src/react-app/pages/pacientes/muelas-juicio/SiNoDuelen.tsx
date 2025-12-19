import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function SiNoDuelenArticulo() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: 'Si no duelen, ¿sacarlas?' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        {
            title: '¿Cuánto dura la hinchazón después de la extracción?',
            href: '/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon'
        },
        {
            title: '¿Me pueden sacar las 4 muelas en una sola sesión?',
            href: '/tratamientos/muelas-del-juicio/guias/4-muelas-misma-sesion'
        }
    ];

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Por qué no duelen si están mal posicionadas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las muelas del juicio pueden estar mal posicionadas sin causar dolor porque aún no presionan los nervios ni generan inflamación. El dolor aparece cuando la muela intenta salir, infecta la encía (pericoronaritis) o daña el diente vecino. Muchas veces, cuando empiezan a doler, el daño ya está hecho."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué problemas pueden causar a futuro?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las muelas del juicio mal posicionadas pueden causar: infecciones recurrentes en la encía (pericoronaritis), daño a los molares vecinos (caries o reabsorción de raíces), formación de quistes o tumores, apiñamiento dental, y dolor crónico. Estos problemas son más complicados de tratar si se espera demasiado."
                }
            },
            {
                "@type": "Question",
                "name": "¿Todas las muelas del juicio se deben sacar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Solo se extraen las muelas del juicio que están impactadas, mal posicionadas, causan dolor, infecciones o dañan otros dientes. Si salen correctamente, tienen espacio y se pueden limpiar bien, pueden quedarse. La decisión se toma con rayos X y evaluación clínica."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si espero muchos años?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Con los años, las raíces de las muelas del juicio se hacen más largas y el hueso más denso, haciendo la extracción más compleja y la recuperación más lenta. Además, aumenta el riesgo de daño al nervio dentario. La extracción preventiva entre los 18-25 años es más rápida y segura."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo saber si las mías están mal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La única forma de saber con certeza es con una radiografía panorámica o un scanner 3D. Estos exámenes muestran si las muelas tienen espacio, están inclinadas, impactadas o presionan otros dientes. Una evaluación profesional con el Dr. Carlos Beiner puede determinar si necesitas extraerlas."
                }
            }
        ]
    };

    // Actualizar title y agregar Schema al montar
    useEffect(() => {
        document.title = '¿Si no me duelen las muelas del juicio, debo sacarlas? | Dr. Carlos Beiner';

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaFAQ);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <ArticleLayout
            title="¿Si no me duelen las muelas del juicio, es necesario sacarlas igual?"
            description="La verdad sobre por qué muchas veces es mejor actuar antes de que duela. Explicación clara y profesional del Dr. Carlos Beiner."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            {/* Introducción */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-amber-900 mb-2">
                    💡 La respuesta corta
                </p>
                <p className="text-amber-800">
                    <strong>Sí, en muchos casos.</strong> Las muelas del juicio son como una "bomba de tiempo silenciosa".
                    Cuando empiezan a doler, muchas veces el daño ya está hecho. La evaluación temprana con rayos X
                    es clave para decidir si es mejor sacarlas antes de que causen problemas.
                </p>
            </div>

            {/* Sección 1 */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Por qué no duelen si están mal posicionadas?
            </h2>
            <p>
                Es una de las preguntas más frecuentes en la consulta: <em>"Doctor, si no me duelen, ¿para qué sacarlas?"</em>
            </p>
            <p>
                La realidad es que <strong>el dolor no es un buen indicador</strong> de si una muela del juicio está bien o mal.
            </p>
            <p>
                Las muelas pueden estar:
            </p>
            <ul>
                <li>Completamente <strong>impactadas</strong> (atrapadas dentro del hueso)</li>
                <li>Inclinadas hacia el diente vecino</li>
                <li>Presionando raíces de otros molares</li>
            </ul>
            <p>
                Y aún así, <strong>no causar dolor</strong>... hasta que:
            </p>
            <ul>
                <li>Intentan salir y no tienen espacio → inflamación y dolor agudo</li>
                <li>Se infecta la encía alrededor (pericoronaritis) → dolor, mal sabor, hinchazón</li>
                <li>Dañan la raíz del molar vecino → problema irreversible</li>
            </ul>
            <p>
                <strong>En resumen:</strong> Que no duela ahora no significa que no vaya a causar problemas más adelante.
            </p>

            {/* Sección 2 */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué problemas pueden causar a futuro?
            </h2>
            <p>
                Las muelas del juicio mal posicionadas que "no molestan" pueden causar:
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Problemas más comunes</h3>
                <ul className="space-y-2 text-red-800">
                    <li><strong>Infecciones recurrentes:</strong> La encía se inflama, duele y sangra (pericoronaritis)</li>
                    <li><strong>Daño a molares vecinos:</strong> Caries o reabsorción de raíces del segundo molar</li>
                    <li><strong>Quistes o tumores:</strong> Se pueden formar alrededor de muelas impactadas</li>
                    <li><strong>Apiñamiento dental:</strong> Pueden empujar los demás dientes (aunque no siempre)</li>
                    <li><strong>Dolor crónico de mandíbula:</strong> Por presión constante</li>
                </ul>
            </div>
            <p>
                Lo peor es que <strong>estos problemas son más difíciles (y caros) de tratar</strong> que simplemente
                sacar la muela a tiempo.
            </p>

            {/* Sección 3 */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Todas las muelas del juicio se deben sacar?
            </h2>
            <p>
                <strong>No.</strong> Esta es una decisión que se toma caso por caso.
            </p>
            <p>
                Una muela del juicio puede <strong>quedarse</strong> si:
            </p>
            <ul>
                <li>✅ Sale <strong>completamente</strong> y en la posición correcta</li>
                <li>✅ Tiene <strong>suficiente espacio</strong> para morder bien</li>
                <li>✅ Se puede <strong>limpiar correctamente</strong> con cepillo e hilo dental</li>
                <li>✅ No causa dolor ni inflamación</li>
            </ul>
            <p>
                Pero <strong>en la mayoría de los casos</strong>, las muelas del juicio no cumplen alguno de estos requisitos.
            </p>
            <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                💡 <strong>Dato importante:</strong> Solo un 3% de la población tiene suficiente espacio para que
                las 4 muelas del juicio salgan bien. En el resto, es mejor sacarlas de forma preventiva.
            </p>

            {/* Sección 4 */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué pasa si espero muchos años?
            </h2>
            <p>
                Esta es otra pregunta clave. La respuesta: <strong>la extracción se vuelve más compleja con el tiempo.</strong>
            </p>
            <p>
                Entre los <strong>18 y 25 años</strong>, las raíces de las muelas del juicio están todavía en formación
                y el hueso es más suave. La extracción es:
            </p>
            <ul>
                <li>✅ Más rápida</li>
                <li>✅ Menos dolorosa</li>
                <li>✅ Con recuperación más corta</li>
                <li>✅ Menor riesgo de complicaciones</li>
            </ul>
            <p>
                Después de los <strong>30-35 años</strong>:
            </p>
            <ul>
                <li>❌ Las raíces ya están completamente formadas (más largas y curvas)</li>
                <li>❌ El hueso se vuelve más denso y duro</li>
                <li>❌ Mayor riesgo de lesión al nervio dentario</li>
                <li>❌ Recuperación más lenta</li>
            </ul>
            <p>
                <strong>En conclusión:</strong> Si se van a sacar, es mejor hacerlo joven.
            </p>

            {/* Sección 5 */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cómo saber si las mías están mal?
            </h2>
            <p>
                La única forma de saber con <strong>certeza</strong> es con una <strong>radiografía panorámica</strong> o
                un <strong>scanner 3D</strong> (CBCT).
            </p>
            <p>
                Estos exámenes muestran:
            </p>
            <ul>
                <li>🔍 Si las muelas tienen espacio suficiente</li>
                <li>🔍 Si están inclinadas o impactadas</li>
                <li>🔍 Si presionan las raíces de otros dientes</li>
                <li>🔍 Si están cerca del nervio dentario inferior</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-lg text-green-900 mb-2">✅ Recomendación del Dr. Carlos Beiner</h3>
                <p className="text-green-800">
                    Si tienes entre 17 y 25 años y <strong>nunca te has sacado rayos X de las muelas del juicio</strong>,
                    agenda una evaluación. Es mejor saber ahora si hay un problema en formación que esperar a que duela.
                </p>
            </div>

            {/* Conclusión */}
            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                Conclusión
            </h2>
            <p>
                La pregunta no debería ser <em>"¿Me duelen?"</em>, sino <em>"¿Pueden causar problemas a futuro?"</em>
            </p>
            <p>
                La extracción preventiva de muelas del juicio es una decisión informada que se toma evaluando:
            </p>
            <ul>
                <li>📋 Posición de las muelas (rayos X)</li>
                <li>📋 Edad del paciente</li>
                <li>📋 Riesgo de complicaciones futuras</li>
                <li>📋 Estado de salud general</li>
            </ul>
            <p>
                <strong>Mi recomendación:</strong> Si tus muelas del juicio están mal posicionadas pero no duelen,
                sacarlas de forma preventiva suele ser la mejor opción. Es más simple, más rápido y evita problemas
                mayores en el futuro.
            </p>
        </ArticleLayout>
    );
}
